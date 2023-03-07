import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

const Contacts = () => {
  return (
    <main>
      <Container>
        <nav className='breadcrumbs'>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/">Контакты</Link></li>
          </ul>
        </nav>

        <div className='page-title'>
          <img src="imgs/img5.jpg" alt="Контакты" />
          <h1>Контакты</h1>
        </div>
        
        <h2>ООО “Компания”</h2>
        <ul className='list-unstyled mb-5'>
          <li className='mb-3'><a href="tel:+79870405619">+7 987 040-56-19</a></li>
          <li className='mb-3'><a href="tel:+78432405619">+7 843 240-56-19</a></li>
          <li className='mb-3'><a href="/">@mail</a></li>
          <li className='mb-3'><address>Адрес: г. Казань, ул. Родины 24, оф. 1</address></li>
        </ul>
        <iframe id='map' title='map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A332f156714adeb82f855fce7b3fcf200fec003869f9f75f75dc4e7a47902b724&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
      </Container>
    </main>
  );
};

export default Contacts;