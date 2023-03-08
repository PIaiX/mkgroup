import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import Callback1 from '../components/forms/Callback1';
import CategoryCard from '../components/CategoryCard';

const Catalog = () => {
  return (
    <main>
      <Container>
        <Breadcrumbs/>

        <section className='sec-2 mb-35'>
          <PageTitle title={'Каталог продукции'} color={'orange'}/>

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
              <CategoryCard imgUrl={"imgs/img2.jpg"} title={"Офисы"}/>
            </Col>
            <Col>
              <CategoryCard imgUrl={"imgs/img2.jpg"} title={"СТО и Автосервисы"}/>
            </Col>
            <Col>
              <CategoryCard imgUrl={"imgs/img2.jpg"} title={"Силосы"}/>
            </Col>
            <Col>
              <CategoryCard imgUrl={"imgs/img2.jpg"} title={"Эстакады"}/>
            </Col>
            <Col>
              <CategoryCard imgUrl={"imgs/img2.jpg"} title={"Спорткомплексы"}/>
            </Col>
            <Col>
              <CategoryCard imgUrl={"imgs/img2.jpg"} title={"Мосты"}/>
            </Col>
            <Col>
              <CategoryCard imgUrl={"imgs/img2.jpg"} title={"Мачты связи"}/>
            </Col>
            <Col>
              <CategoryCard imgUrl={"imgs/img2.jpg"} title={"Центры логистики"}/>
            </Col>
          </Row>
        </section>

        <Callback1/>
      </Container>
    </main>
  );
};

export default Catalog;