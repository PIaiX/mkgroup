import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';

import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import {ReactComponent as IconPrev} from '../assets/imgs/icons/prev.svg';
import {ReactComponent as IconNext} from '../assets/imgs/icons/next.svg';
import Callback3 from "../components/forms/Callback3";
import useLoading from "../hooks/useLoading";
import {GetOnePortfolio} from "../services/portfolio";
import Loader from "../components/Loader";
import {useParams} from "react-router-dom";
import {checkPhotoPath} from "../helpers/checkPhotoPath";

const PortfolioItem = () => {
  const {portfolioId} = useParams()
  const [portfolio] = useLoading([() => GetOnePortfolio(portfolioId)])

  if (portfolio == 'loading')
        return <Loader/>
    const {characteristics, description, id, image, images, subtitle, title} = portfolio
    return (
        <main>
            <Container>
                <Breadcrumbs namePage={title}/>

                <section className='sec-9 mb-md-5'>
                    <PageTitle title={title} text={subtitle}/>

                    <div className="position-relative px-sm-5 mb-5">
                        {images?.length > 0 &&
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
                                {images?.map((element, index) =>
                                    <SwiperSlide key={index}>
                                        <img src={checkPhotoPath(element)} alt={title} className='img-fluid'/>
                                    </SwiperSlide>
                                )}
                                <div className="swiper-button-prev"><IconPrev/></div>
                                <div className="swiper-button-next"><IconNext/></div>
                            </Swiper>
                        }
                    </div>
                    <Row xs={1} lg={2} className='flex-lg-row-reverse px-sm-5'>
                        <Col>
                            <h4>Технические характеристики проекта</h4>
                            <hr/>
                            <Table borderless>
                                <tbody>
                                {characteristics?.map(({name, value}, index) =>
                                    <tr key={index}>
                                        <td>{name}</td>
                                        <td>{value}</td>
                                    </tr>
                                )}
                                </tbody>
                            </Table>
                            <Callback3 btnClassName={'btn-2 mt-sm-4'} btnText={'Получить консультацию'}/>
                        </Col>
                        <Col className='mt-4 mt-lg-0'>
                            <div dangerouslySetInnerHTML={{__html: description}}></div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
};

export default PortfolioItem;