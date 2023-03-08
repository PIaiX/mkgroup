import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import {ReactComponent as IconPrev} from '../assets/imgs/icons/prev.svg';
import {ReactComponent as IconNext} from '../assets/imgs/icons/next.svg';

const PortfolioItem = () => {
  return (
    <main>
      <Container>
        <Breadcrumbs/>

        <section className='sec-9 mb-md-5'>
          <PageTitle title={'Название кейса портфолио'} text={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum '}/>

          <div className="position-relative px-sm-5 mb-5">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <img src="imgs/img6.jpg" alt="img6" className='img-fluid'/>
              </SwiperSlide>
              <SwiperSlide>
              <img src="imgs/img6.jpg" alt="img6" className='img-fluid'/>
              </SwiperSlide>
              <SwiperSlide>
              <img src="imgs/img6.jpg" alt="img6" className='img-fluid'/>
              </SwiperSlide>
              <SwiperSlide>
              <img src="imgs/img6.jpg" alt="img6" className='img-fluid'/>
              </SwiperSlide>
              <div className="swiper-button-prev"><IconPrev/></div>
              <div className="swiper-button-next"><IconNext/></div>
            </Swiper>
          </div>
          <Row xs={1} lg={2} className='flex-lg-row-reverse px-sm-5'>
            <Col>
              <h4>Технические характеристики проекта</h4>
              <hr />
              <Table borderless>
                <tbody>
                  <tr>
                    <td>Размеры </td>
                    <td>12x12 м</td>
                  </tr>
                  <tr>
                    <td>Длительность строительства </td>
                    <td>Предзаказ</td>
                  </tr>
                </tbody>
              </Table>
              <button type='button' className='btn-2 mt-sm-4'>Получить консультацию</button>
            </Col>
            <Col className='mt-4 mt-lg-0'>
              <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
              <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default PortfolioItem;