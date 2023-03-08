import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import Callback2 from '../components/forms/Callback2';

const ServicePage = () => {
  return (
    <main>
      <Container>
        <Breadcrumbs/>

        <section className='sec-11 mb-sm-4 mb-md-5'>
          <PageTitle title={'Название услуги'}/>

          <Row className='justify-content-center justify-content-lg-start gx-2 gx-sm-4 gy-4 gy-sm-5 g-xl-5'>
            <Col md={6} lg={8}>
              <p className='mb-4'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga.</p>
              <p className='mb-4'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga.</p>
            </Col>
            <Col xs={6} lg={4}>
              <img src="imgs/img2.jpg" alt="img2" className='img' />
            </Col>
            <Col xs={12} lg={8}>
              <Row className='justify-content-center gy-4 gx-4 gx-xl-5' xs={2} sm={3}>
                <Col>
                  <img src="imgs/icons/safe.png" alt="safe" className='img-fluid mb-3'/>
                  <h6>Culpa qui officia deserunt mollitia animi, est laborum et doloru</h6>
                </Col>
                <Col>
                  <img src="imgs/icons/target.png" alt="target" className='img-fluid mb-3' />
                  <h6>Culpa qui officia deserunt mollitia animi, est laborum et doloru</h6>
                </Col>
                <Col>
                  <img src="imgs/icons/trustworthy.png" alt="trustworthy" className='img-fluid mb-3' />
                  <h6>Culpa qui officia deserunt mollitia animi, est laborum et doloru</h6>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={8}>
              <h2 className='mb-4 mb-xl-5'>Что то дополнительное про услугу</h2>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
              <div className="table-colored mt-4 mt-xl-5">
                <table>
                  <thead>
                    <tr>
                      <th>№</th>
                      <th>At vero eos et accusamus et iusto</th>
                      <th>Цена,&nbsp;₽</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
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