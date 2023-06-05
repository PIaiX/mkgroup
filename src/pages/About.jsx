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
          <PageTitle title={'Нескучный заголовок'} text={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum '}/>

          <Row className='gy-4 gy-sm-5 gx-2 gx-sm-4 gx-xl-5'>
            <Col xs={12} lg={8}>
              <p className='px-xl-5 mb-4 mb-xl-5'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga.</p>
              <Row className='justify-content-center gy-4 px-xl-5 gx-4 gx-xl-5' xs={2} sm={3}>
                <Col>
                  <img src="imgs/icons/safe.png" alt="safe" className='icon'/>
                  <h6>Culpa qui officia deserunt mollitia animi, est laborum et doloru</h6>
                </Col>
                <Col>
                  <img src="imgs/icons/target.png" alt="target" className='icon' />
                  <h6>Culpa qui officia deserunt mollitia animi, est laborum et doloru</h6>
                </Col>
                <Col>
                  <img src="imgs/icons/trustworthy.png" alt="trustworthy" className='icon' />
                  <h6>Culpa qui officia deserunt mollitia animi, est laborum et doloru</h6>
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
              <p className='mb-4 mb-xl-5'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga.</p>
              <ul>
                <li>At vero eos et accusamus et iusto </li>
                <li>odio dignissimos ducimus qui blanditiis praesentium</li>
                <li>voluptatum deleniti atque corrupti quos dolores</li>
              </ul>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default About;