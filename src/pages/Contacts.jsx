import React from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import {useAppSelector} from "../store";

const Contacts = () => {
  const information = useAppSelector(state => state.app.information)

  return (
    <main>
      <Container>
        <Breadcrumbs namePage={'Контакты'}/>
        <section className='sec-4'>
          <PageTitle title={'Контакты'}/>
          <h2>{information?.legalStatus}</h2>
          <ul className='list-unstyled mb-5'>
            <li className='mb-3'><a href={`tel:${information?.phone}`}>{information?.phone}</a></li>
            <li className='mb-3'><a href="/">mail{information?.email}</a></li>
            <li className='mb-3'><address className='black'>{information?.address}</address></li>
          </ul>
          <iframe id='map' title='map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A332f156714adeb82f855fce7b3fcf200fec003869f9f75f75dc4e7a47902b724&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
        </section>
      </Container>
    </main>
  );
};

export default Contacts;