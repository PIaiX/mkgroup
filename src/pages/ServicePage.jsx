import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import Callback2 from '../components/forms/Callback2';
import {useParams} from "react-router-dom";
import Loader from "../components/Loader";
import {checkPhotoPath} from "../helpers/checkPhotoPath";
import useLoading from "../hooks/useLoading";
import {GetOneService} from "../services/services";

const ServicePage = () => {
    const {serviceId} = useParams()
    const [serviceCard] = useLoading({func: () => GetOneService(serviceId)})

    const {title, image, description, variants} = serviceCard

    if (serviceCard == 'loading')
        return <Loader/>

    return (
        <main>
            <Container>
                <Breadcrumbs/>

                <section className='sec-11 mb-sm-4 mb-md-5'>
                    <PageTitle title={title}/>

                    <Row className='justify-content-center justify-content-lg-start gx-2 gx-sm-4 gy-4 gy-sm-5 g-xl-5'>
                        <Col md={6} lg={8}>
                            <div dangerouslySetInnerHTML={{__html: description}}></div>
                        </Col>
                        <Col xs={6} lg={4}>
                            <img src={checkPhotoPath(image)} alt="img2" className='img'/>
                        </Col>
                        <Col xs={12} lg={8}>
                            <h2 className='mb-4 mb-xl-5'>Таблица цен на оказание услуги</h2>
                            <p></p>
                            <div className="table-colored mt-4 mt-xl-5">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>Описание</th>
                                        <th>Цена,&nbsp;₽</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {variants?.map(({id, text, price}, index) =>
                                        <tr key={index}>
                                            <td>{id}</td>
                                            <td>{text}</td>
                                            <td>{price}</td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4}>
                            <Callback2/>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
};

export default ServicePage;