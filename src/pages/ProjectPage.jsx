import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';

import {Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { IoHelpCircle } from "react-icons/io5";
import ImgModal from '../components/utils/ImgModal';
import Callback3 from '../components/forms/Callback3';

const ProjectPage = () => {
  const [imgs, setImgs] = useState([
    {
      id: 0,
      url: 'imgs/img6.jpg',
      active: true,
    },
    {
      id: 1,
      url: 'imgs/img7.jpg',
      active: false,
    },
    {
      id: 2,
      url: 'imgs/img8.jpg',
      active: false,
    },
    {
      id: 3,
      url: 'imgs/img3.jpg',
      active: false,
    },
  ]);

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
  console.log(activeImg);

  return (
    <main>
      <Container>
        <PageTitle title={'Информация о категории'} text={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum '}/>
        <Breadcrumbs/>

        <section className='sec-12 mb-sm-4 mb-md-5'>
          <h1>Быстровозводимый склад 12x12 </h1>
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
                    <td>12x12 м</td>
                  </tr>
                  <tr>
                    <td>Наличие</td>
                    <td>
                      Предзаказ 
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
                    <td><h2 className='mb-0'>504 000 ₽</h2></td>
                  </tr>
                </tbody>
              </Table>
              <Callback3 btnClassName={'btn-2 mb-4 mb-sm-5'} btnText={'Получить консультацию'}/>
              <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
            </Col>
            <Col xs={12} xl={10} className='mt-4 mt-sm-5'>
              <h2>Что то дополнительное про товар и его характеристики</h2>
            </Col>
            <Col xs={12} lg={8}>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
              <div className="table-colored mt-4 mt-xl-5">
                <table>
                  <thead>
                    <tr>
                      <th>№</th>
                      <th>At vero eos et accusamus et iusto</th>
                      <th>Цена,&nbsp;₽</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
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