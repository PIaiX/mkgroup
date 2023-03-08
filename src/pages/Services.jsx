import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <main>
      <Container>
        <Breadcrumbs/>
        <section className='sec-11 mb-sm-4 mb-md-5'>
          <PageTitle title={'Услуги'} text={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum '}/>
          <Row xs={2} lg={3} className="gx-3 gx-sm-4 gy-4 gy-sm-5">
            <Col>
              <ServiceCard/>
            </Col>
            <Col>
              <ServiceCard/>
            </Col>
            <Col>
              <ServiceCard/>
            </Col>
            <Col>
              <ServiceCard/>
            </Col>
            <Col>
              <ServiceCard/>
            </Col>
            <Col>
              <ServiceCard/>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default Services;