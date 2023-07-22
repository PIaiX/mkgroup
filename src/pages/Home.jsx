import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CategoryCard from '../components/CategoryCard';
import {ReactComponent as IconPrev} from '../assets/imgs/icons/prev.svg';
import {ReactComponent as IconNext} from '../assets/imgs/icons/next.svg';
import Quiz from '../components/Quiz';
import ProjectCard from '../components/ProjectCard';
import {useAppSelector} from "../store";
import {Link} from "react-router-dom";
import {checkPhotoPath} from "../helpers/checkPhotoPath";
import Callback3 from "../components/forms/Callback3";
import {getPromoAds} from "../services/AdsService";
import useLoading from "../hooks/useLoading";
import Loader from "../components/Loader";


const Home = () => {

  const categories = useAppSelector(state => state.app.categories)
  const banners = useAppSelector(state => state.app.banners)
  const [promo] = useLoading([getPromoAds])

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
            {
              banners?.map((element, index)=>
                <SwiperSlide key={index}>
                  <div className='img'>
                    <img src={checkPhotoPath(element?.image)} alt="Изготавливаем металлоконструкции любой сложности" />
                  </div>
                  <div className="descr">
                    <h2 className='title'>{element?.title}</h2>
                    <div className="d-sm-flex align-items-center">
                      <div dangerouslySetInnerHTML={{__html:element?.description}}></div>
                      <Callback3 btnClassName={'btn-2 mt-3 mt-sm 0 ms-sm-5  text-nowrap'} btnText={'Оставить заявку'}/>
                    </div>
                  </div>
                </SwiperSlide>
              )
            }
            <div className="swiper-button-prev"><IconPrev/></div>
            <div className="swiper-button-next"><IconNext/></div>
          </Swiper>
        </section>

        <section className='sec-2 mb-35'>
          <h2>Каталог</h2>
          <Row xs={2} md={3} lg={4} className='gx-2 gx-sm-4 gy-4 gy-sm-5'>
            {categories?.slice(0,7)?.map((element, index)=>
                <Col key={index}>
                  <CategoryCard {...element}/>
                </Col>
            )}
            <Col>
              <Link to={'/catalog'}>
                <button type='button' className='category-card-btn'>
                  <h3>Перейти <br/>в каталог</h3>
                  <div className='icon'><IconNext/></div>
                </button>
              </Link>
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
                <p className='fw-3'>
                  Хотите построить металлокаркас, но не знаете с чего начать?
                  <br/>
                  Оставьте заявку. Наши специалисты свяжутся с вами в ближайшее время и проконсультируют по всем возникшим вопросам.
                </p>
                <Callback3 btnClassName={'btn-2'} btnText={'Оставить заявку'}/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Row xs={2} md={3} lg={2} className='gx-2 gx-sm-4'>
                {promo=='loading'?
                  <Loader />
                  :promo?.map((element, index)=>
                    <Col key={index}>
                      <ProjectCard {...element} />
                    </Col>
                )}
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