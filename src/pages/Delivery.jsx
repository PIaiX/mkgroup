import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumbs from '../components/Breadcrumbs';

const Delivery = () => {
  return (
    <main>
      <Container>
        <Breadcrumbs/>

        <section className='sec-10 mb-35'>
          <h2 className='mb-4 mb-xl-5'>Способы доставки</h2>
          <Row xs={1} sm={2} md={3} className="justify-content-center gy-4 gx-4 gx-xl-5">
            <Col>
              <img src="imgs/icons/rocket.png" alt="rocket" className='img-fluid d-block mx-auto mb-3'/>
              <h5>Culpa qui officia deserunt mollitia</h5>
              <p>Culpa qui officia deserunt mollitia animi, est laborum et doloru</p>
            </Col>
            <Col>
              <img src="imgs/icons/rocket.png" alt="rocket" className='img-fluid d-block mx-auto mb-3'/>
              <h5>Culpa qui officia deserunt mollitia</h5>
              <p>Culpa qui officia deserunt mollitia animi, est laborum et doloru</p>
            </Col>
            <Col>
              <img src="imgs/icons/rocket.png" alt="rocket" className='img-fluid d-block mx-auto mb-3'/>
              <h5>Culpa qui officia deserunt mollitia</h5>
              <p>Culpa qui officia deserunt mollitia animi, est laborum et doloru</p>
            </Col>
          </Row>
        </section>

        <section className='mb-35'>
          <h2 className='mb-4 mb-xl-5'>Самовывоз по адресу г. Казань, ул. Родины 24, оф. 1 </h2>
          <iframe id='map' title='map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A332f156714adeb82f855fce7b3fcf200fec003869f9f75f75dc4e7a47902b724&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
        </section>

        <section className='sec-10 mb-35'>
          <h2 className='mb-4 mb-xl-5'>Способы оплаты</h2>
          <Row xs={1} lg={2} className="g-4 g-xl-5">
            <Col>
              <Row className='gx-2 gx-sm-4'>
                <Col xs={4}>
                  <img src="imgs/img2.jpg" alt="img2" className='img'/>
                </Col>
                <Col xs={8}>
                  <h2 className='mb-2 mb-sm-4'>At vero eos et accusamus et iusto</h2>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className='gx-2 gx-sm-4'>
                <Col xs={4}>
                  <img src="imgs/img2.jpg" alt="img2" className='img'/>
                </Col>
                <Col xs={8}>
                  <h2 className='mb-2 mb-sm-4'>At vero eos et accusamus et iusto</h2>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className='gx-2 gx-sm-4'>
                <Col xs={4}>
                  <img src="imgs/img2.jpg" alt="img2" className='img'/>
                </Col>
                <Col xs={8}>
                  <h2 className='mb-2 mb-sm-4'>At vero eos et accusamus et iusto</h2>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className='gx-2 gx-sm-4'>
                <Col xs={4}>
                  <img src="imgs/img2.jpg" alt="img2" className='img'/>
                </Col>
                <Col xs={8}>
                  <h2 className='mb-2 mb-sm-4'>At vero eos et accusamus et iusto</h2>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        <form action="" className='callback mb-5'>
          <h2>Не нашли что искали?</h2>
          <p className='mb-4 mb-md-5'>Задайте интересующий вопрос менеджеру и получите ответ в течение 15 минут</p>
          <div className="d-sm-flex mb-4">
            <input type="text" placeholder='Имя'/>
            <input type="text" placeholder='Номер телефона'/>
            <button type='submit' className='btn-2'>Отправить</button>
          </div>
          <p className="fs-07">Нажимая кнопку “Отправить”, вы даете согласие на обработку персональных данных</p>
        </form>
      </Container>
    </main>
  );
};

export default Delivery;