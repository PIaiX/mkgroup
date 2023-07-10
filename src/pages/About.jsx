import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';

const About = () => {
  return (
    <main>
      <Container>
        <Breadcrumbs namePage={'О компании'}/>

        <section className='sec-7 mb-md-5'>
          <PageTitle title={'О компании'} text={'Производство сооружений из металлоконструкций любой сложности '}/>

          <Row className='gy-4 gy-sm-5 gx-2 gx-sm-4 gx-xl-5'>
            <Col xs={12} lg={8}>
              <p className='px-xl-5 mb-4 mb-xl-5 fs-08'>
                Основная цель компании устанавливать качественную продукцию, которая не будет доставлять нашим партнерам никаких проблем, и работать на них и на нашу репутацию.
                <br/><br/>
                Для успешного решения любых задач у нас есть необходимое оборудование и производственная база, чтобы изготовить конструкции требуемого размера со всеми комплектующими элементами.
                <br/><br/>
                Клиент имеет возможность недорого заказать производственное изделие по собственным эскизам или чертежам. Вы сможете выбрать из доступных материалов.
              </p>
              <Row className='justify-content-center gy-4 px-xl-5 gx-4 gx-xl-5' xs={2} sm={3}>
                <Col>
                  <img src="imgs/icons/safe.png" alt="safe" className='icon'/>
                  <h6>Собственное производство</h6>
                </Col>
                <Col>
                  <img src="imgs/icons/target.png" alt="target" className='icon' />
                  <h6>Установлено более 1500 изделий.</h6>
                </Col>
                <Col>
                  <img src="imgs/icons/trustworthy.png" alt="trustworthy" className='icon' />
                  <h6>Многолетний опыт работы</h6>
                </Col>
              </Row>
            </Col>
            <Col xs={6} lg={4}>
              <img src="imgs/img2.jpg" alt="img2" className='img'/>
            </Col>
            <Col xs={6} lg={4}>
              <img src="imgs/img2.jpg" alt="img2" className='img'/>
            </Col>
            <Col xs={12} lg={8}>
              <p className='mb-4 mb-xl-5 fs-08'>
                За годы работы у нас сформировался коллектив, не только хорошо разбирающийся в тонкостях производства и установки подвижных ограждающих конструкций, но и с любовью относящийся к своей работе.
                <br/><br/>
                Мы готовы выслушать все пожелания клиента и предложить наиболее выгодные как с технической, так и с экономической стороны варианты их решений.
                <br/><br/>
                Мы работаем для клиентов и готовы сделать всё возможное для наиболее точного воплощения их желаний.
                <br/><br/>
                Мы всегда готовы к новому сотрудничеству и настроены на длительное и взаимовыгодное партнерство.
                <br/><br/>
                Мы рады будем видеть Вас в числе наших постоянных клиентов.

              </p>
              {/*<ul>*/}
              {/*  <li>At vero eos et accusamus et iusto </li>*/}
              {/*  <li>odio dignissimos ducimus qui blanditiis praesentium</li>*/}
              {/*  <li>voluptatum deleniti atque corrupti quos dolores</li>*/}
              {/*</ul>*/}
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default About;