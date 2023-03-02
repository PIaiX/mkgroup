import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  return (
    <main>
      <Container>
        <section className='sec-1'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className='img'>
                <img src="imgs/img1.jpg" alt="Изготавливаем металлоконструкции любой сложности" />
              </div>
              <div className="descr">
                <h2 className='title'>Изготавливаем металлоконструкции любой сложности</h2>
                <div className="d-flex align-items-center">
                  <p className='flex-1'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                  <button type='button' className='btn-2 ms-5'>Оставить заявку</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='img'>
                <img src="imgs/img1.jpg" alt="Изготавливаем металлоконструкции любой сложности" />
              </div>
              <div className="descr">
                <h2 className='title'>Изготавливаем металлоконструкции любой сложности</h2>
                <div className="d-flex align-items-center">
                  <p className='flex-1'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                  <button type='button' className='btn-2 ms-5'>Оставить заявку</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='img'>
                <img src="imgs/img1.jpg" alt="Изготавливаем металлоконструкции любой сложности" />
              </div>
              <div className="descr">
                <h2 className='title'>Изготавливаем металлоконструкции любой сложности</h2>
                <div className="d-flex align-items-center">
                  <p className='flex-1'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                  <button type='button' className='btn-2 ms-5'>Оставить заявку</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='img'>
                <img src="imgs/img1.jpg" alt="Изготавливаем металлоконструкции любой сложности" />
              </div>
              <div className="descr">
                <h2 className='title'>Изготавливаем металлоконструкции любой сложности</h2>
                <div className="d-flex align-items-center">
                  <p className='flex-1'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                  <button type='button' className='btn-2 ms-5'>Оставить заявку</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </Container>
    </main>
  );
};

export default Home;