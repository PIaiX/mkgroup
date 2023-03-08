import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CategoryCard from '../components/CategoryCard';
import {ReactComponent as IconPrev} from '../assets/imgs/icons/prev.svg';
import {ReactComponent as IconNext} from '../assets/imgs/icons/next.svg';
import Quiz from '../components/Quiz';
import ProjectCard from '../components/ProjectCard';


const Home = () => {
  return (
    <main>
      <Container>
        <section className='sec-1 mb-35'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className='img'>
                <img src="imgs/img1.jpg" alt="Изготавливаем металлоконструкции любой сложности" />
              </div>
              <div className="descr">
                <h2 className='title'>Изготавливаем металлоконструкции любой сложности</h2>
                <div className="d-sm-flex align-items-center">
                  <p className='flex-1'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                  <button type='button' className='btn-2 mt-3 mt-sm 0 ms-sm-5'>Оставить заявку</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='img'>
                <img src="imgs/img1.jpg" alt="Изготавливаем металлоконструкции любой сложности" />
              </div>
              <div className="descr">
                <h2 className='title'>Изготавливаем металлоконструкции любой сложности</h2>
                <div className="d-sm-flex align-items-center">
                  <p className='flex-1'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                  <button type='button' className='btn-2 mt-3 mt-sm 0 ms-sm-5'>Оставить заявку</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='img'>
                <img src="imgs/img1.jpg" alt="Изготавливаем металлоконструкции любой сложности" />
              </div>
              <div className="descr">
                <h2 className='title'>Изготавливаем металлоконструкции любой сложности</h2>
                <div className="d-sm-flex align-items-center">
                  <p className='flex-1'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                  <button type='button' className='btn-2 mt-3 mt-sm 0 ms-sm-5'>Оставить заявку</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='img'>
                <img src="imgs/img1.jpg" alt="Изготавливаем металлоконструкции любой сложности" />
              </div>
              <div className="descr">
                <h2 className='title'>Изготавливаем металлоконструкции любой сложности</h2>
                <div className="d-sm-flex align-items-center">
                  <p className='flex-1'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                  <button type='button' className='btn-2 mt-3 mt-sm 0 ms-sm-5'>Оставить заявку</button>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-button-prev"><IconPrev/></div>
            <div className="swiper-button-next"><IconNext/></div>
          </Swiper>
        </section>

        <section className='sec-2 mb-35'>
          <h2>Каталог</h2>
          <Row xs={2} md={3} lg={4} className='gx-2 gx-sm-4 gy-4 gy-sm-5'>
            <Col>
              <CategoryCard imgUrl={"imgs/img2.jpg"} title={"Ангары"}/>
            </Col>
            <Col>
              <CategoryCard imgUrl={"imgs/img3.jpg"} title={"Быстровозводимые здания"}/>
            </Col>
            <Col>
              <CategoryCard imgUrl={"imgs/img2.jpg"} title={"Склады"}/>
            </Col>
            <Col>
              <CategoryCard imgUrl={"imgs/img2.jpg"} title={"Промышленные здания"}/>
            </Col>
            <Col>
              <CategoryCard imgUrl={"imgs/img2.jpg"} title={"Кафе и рестораны"}/>
            </Col>
            <Col>
              <CategoryCard imgUrl={"imgs/img2.jpg"} title={"Опоры ЛЭП"}/>
            </Col>
            <Col>
              <CategoryCard imgUrl={"imgs/img2.jpg"} title={"Фермы"}/>
            </Col>
            <Col>
              <button type='button' className='category-card-btn'>
                <h3>Перейти <br/>в каталог</h3>
                <div className='icon'><IconNext/></div>
              </button>
            </Col>
          </Row>
        </section>

        <section className='sec-3 mb-35'>
          <h2>Выгодное предложение</h2>
          <Swiper
            modules={[Scrollbar]}
            spaceBetween={16}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            breakpoints={{
              576: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              992: {
                scrollbar: false,
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
          >
            <SwiperSlide>
              <div className="offer">
                <h3 className='fw-6'>Сварные балки ГОСТ 8240–89 всего за 2 333 ₽ за 1 тонну</h3>
                <p className='fw-3'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                <button type='button' className='btn-2'>Оставить заявку</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Row xs={2} md={3} lg={2} className='gx-2 gx-sm-4'>
                <Col>
                  <ProjectCard />
                </Col>
                <Col>
                  <ProjectCard />
                </Col>
              </Row>
            </SwiperSlide>
          </Swiper>
        </section>

        <Quiz/>
      </Container>
    </main>
  );
};

export default Home;