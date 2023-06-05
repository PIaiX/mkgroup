import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';

import {Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {IoHelpCircle} from "react-icons/io5";
import ImgModal from '../components/utils/ImgModal';
import Callback3 from '../components/forms/Callback3';
import {useParams} from "react-router-dom";
import {getOneAd} from "../services/AdsService";
import functionForPrice from "../helpers/FunctionForPrice";
import {checkPhotoPath} from "../helpers/checkPhotoPath";
const ProjectPage = () => {
  const { id } = useParams()
  const [ad, setAd] = useState()

  useEffect(()=>{
    getOneAd(id)
        .then((res)=>res && setAd(res))
  }, [])

  const [imgs, setImgs] = useState([]);

  useEffect(()=>{
    ad?.images && setImgs([ad?.image, ...ad?.images]?.map((element, index)=>({id:index, url:checkPhotoPath(element), active:index==0})))
  }, [ad])

  const changeImage = (id) => {
    setImgs(imgs.map(item => {
      if(item.id === id ) {
        return {...item, active: true};
      } else {
        return {...item, active: false};
      }
    }))
  }

  const activeImg = imgs.reduce((res, obj) => obj.active === true ? obj : res, {}); 

  return (
    <main>
      <Container>
        <PageTitle title={ad?.category?.name} text={ad?.category?.description}/>
        <Breadcrumbs namePage={ad?.name}/>

        <section className='sec-12 mb-sm-4 mb-md-5'>
          <h1>{ad?.name} </h1>
          <Row className='gx-xl-5'>
            <Col xs={12} lg={6}>
              <ImgModal url={activeImg.url} alt={'Быстровозводимый склад 12x12'} className={'main-img'}/>

              <Swiper
                modules={[Scrollbar]}
                spaceBetween={20}
                slidesPerView={2}
                scrollbar={{ draggable: true }}
              >
                {
                  imgs.filter(item => item.active === false).map(obj => {
                    return <SwiperSlide key={obj.id}>
                      <img src={obj.url} alt={obj.url} onClick={()=>changeImage(obj.id)}/>
                    </SwiperSlide>
                  })
                }
              </Swiper>
            </Col>
            <Col xs={12} lg={6} className='mt-4 mt-sm-5 mt-lg-0'>
              <h5>Характеристики</h5>
              <hr />
              <Table borderless className='w-100 mb-4 mb-sm-5'>
                <tbody>
                  <tr>
                    <td>Размеры</td>
                    <td>{ad?.size}</td>
                  </tr>
                  <tr>
                    <td>Наличие</td>
                    <td>
                      {ad?.availability}
                      <OverlayTrigger
                        placement={'left'}
                        overlay={
                          <Tooltip>
                            Подсказка
                          </Tooltip>
                        }
                      >
                        <sup><IoHelpCircle className='color-2'/></sup>
                      </OverlayTrigger>
                    </td>
                  </tr>
                  <tr>
                    <td>Стоимость строительства от: </td>
                    <td><h2 className='mb-0'>{functionForPrice(ad?.price)} ₽</h2></td>
                  </tr>
                </tbody>
              </Table>
              <Callback3 btnClassName={'btn-2 mb-4 mb-sm-5'} btnText={'Получить консультацию'}/>
              <p>{ad?.description}</p>
            </Col>
            <Col xs={12} xl={10} className='mt-4 mt-sm-5'>
              <h2>Что то дополнительное про товар и его характеристики</h2>
            </Col>
            <Col xs={12} lg={8}>
              <p>{''}</p>
              <div className="table-colored mt-4 mt-xl-5">
                <table>
                  <thead>
                    <tr>
                      <th>№</th>
                      <th>Категория</th>
                      <th>Цена,&nbsp;₽</th>
                    </tr>
                  </thead>
                  <tbody>
                  {ad?.variants?.map((element, index)=>
                      <tr key={index}>
                        <td>{element?.id}</td>
                        <td>{element?.text}</td>
                        <td>от {functionForPrice(element?.price)}</td>
                      </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default ProjectPage;