import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import Callback1 from '../components/forms/Callback1';
import CategoryCard from '../components/CategoryCard';
import {useAppSelector} from "../store";


const Catalog = () => {
    const categories = useAppSelector(state => state.app.categories)

    return (
        <main>
            <Container>
                <Breadcrumbs namePage={'Каталог'}/>

                <section className='sec-2 mb-35'>
                    <PageTitle title={'Каталог продукции'} color={'orange'}/>

                    <Row xs={2} md={3} lg={4} className='gx-2 gx-sm-4 gy-4 gy-sm-5'>
                        {categories?.map((element, index) =>
                            <Col key={index}>
                                <CategoryCard {...element}/>
                            </Col>
                        )}
                    </Row>
                    <div id={'ref'} className={'py-3'}></div>
                </section>

                <Callback1/>
            </Container>
        </main>
    );
};

export default Catalog;