import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import ServiceCard from '../components/ServiceCard';
import {GetAllServices} from "../services/services";
import Loader from "../components/Loader";
import useLoading from "../hooks/useLoading";

const Services = () => {

  const [serviceCards] = useLoading({func:()=>GetAllServices()})

  if(serviceCards=='loading')
    return <Loader />

  return (
    <main>
      <Container>
        <Breadcrumbs namePage={'Услуги'}/>
        <section className='sec-11 mb-sm-4 mb-md-5'>
          <PageTitle title={'Услуги'} text={''}/>
          <Row xs={2} lg={3} className="gx-3 gx-sm-4 gy-4 gy-sm-5">
            {serviceCards?.map((element, index)=>
              <Col key={index}>
                <ServiceCard {...element} />
              </Col>
            )}
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default Services;