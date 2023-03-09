import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import Callback1 from '../components/forms/Callback1';
import CategoryCard from '../components/CategoryCard';

const catalog=[{
  id:0,
  imgUrl:'imgs/img2.jpg',
  title: 'Ангары'
},
  {
    id:1,
    imgUrl:'imgs/img3.jpg',
    title: 'Склады'
  },
  {
    id:2,
    imgUrl:'imgs/img2.jpg',
    title: 'Фермы'
  },
  {
    id:3,
    imgUrl:'imgs/img2.jpg',
    title: 'Офисы'
  },
  {
    id:4,
    imgUrl:'imgs/img2.jpg',
    title: 'Промышленные здания'
  },
  {
    id:5,
    imgUrl:'imgs/img2.jpg',
    title: 'Торговые центры'
  },
  {
    id:6,
    imgUrl:'imgs/img2.jpg',
    title: 'СТО и Автосервисы'
  },
  {
    id:7,
    imgUrl:'imgs/img2.jpg',
    title: 'Быстровозводимые здания'
  },
  {
    id:8,
    imgUrl:'imgs/img2.jpg',
    title: 'Кафе и рестораны'
  },
  {
    id:9,
    imgUrl:'imgs/img2.jpg',
    title: 'Центры логистики'
  },
  {
    id:10,
    imgUrl:'imgs/img2.jpg',
    title: 'Эстакады'
  },
  {
    id:11,
    imgUrl:'imgs/img2.jpg',
    title: 'Силосы'
  },
  {
    id:12,
    imgUrl:'imgs/img2.jpg',
    title: 'Опоры ЛЭП'
  },
  {
    id:13,
    imgUrl:'imgs/img2.jpg',
    title: 'Спорткомплексы'
  },
  {
    id:14,
    imgUrl:'imgs/img2.jpg',
    title: 'Мосты'
  }]


const Catalog = () => {
  return (
    <main>
      <Container>
        <Breadcrumbs/>

        <section className='sec-2 mb-35'>
          <PageTitle title={'Каталог продукции'} color={'orange'}/>

          <Row xs={2} md={3} lg={4} className='gx-2 gx-sm-4 gy-4 gy-sm-5'>
            {catalog.map((element, index)=>
                <Col key={index}>
                  <CategoryCard {...element}/>
                </Col>
            )}
          </Row>
        </section>

        <Callback1/>
      </Container>
    </main>
  );
};

export default Catalog;