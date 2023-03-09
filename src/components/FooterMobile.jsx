import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {NavLink} from 'react-router-dom';
import {ReactComponent as IconPhone} from '../assets/imgs/icons/phone.svg';
import {ReactComponent as IconWapp} from '../assets/imgs/icons/wapp.svg';
import {ReactComponent as IconServices} from '../assets/imgs/icons/services.svg';
import {ReactComponent as IconHome} from '../assets/imgs/icons/home.svg';
import {ReactComponent as IconCatalog} from '../assets/imgs/icons/catalog.svg';
import {ReactComponent as IconCase} from '../assets/imgs/icons/case.svg';
import { RxCross1 } from "react-icons/rx";

const FooterMobile = () => {
  const [showContacts, setShowContacts] = useState(false);
  const handleCloseContacts = () => setShowContacts(false);
  const handleShowContacts = () => setShowContacts(true);

  return (
    <>
      <footer className='mobile'>
        <Container className='h-100'>
          <nav className='h-100'>
            <ul className='h-100'>
              <li>
                <NavLink to='/'>
                  <IconHome/>
                  <h6>Главная</h6>
                </NavLink>
              </li>
              <li>
                <NavLink to='/portfolio'>
                  <IconCase/>
                  <h6>Портфолио</h6>
                </NavLink>
              </li>
              <li>
                <NavLink to='/catalog'>
                  <IconCatalog/>
                  <h6>Каталог</h6>
                </NavLink>
              </li>
              <li>
                <NavLink to='/services'>
                  <IconServices/>
                  <h6>Услуги</h6>
                </NavLink>
              </li>
              <li>
                <button type='button' onClick={(showContacts)?handleCloseContacts:handleShowContacts}>
                  {(showContacts)?<RxCross1/>:<IconPhone/>}
                  <h6>Контакты</h6>
                </button>
              </li>
            </ul>
          </nav>
        </Container>
      </footer>
      <Offcanvas show={showContacts} onHide={handleCloseContacts} placement={'bottom'}>
        <Offcanvas.Body>
          <Container className='py-4'>
            <iframe id='map' title='map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A332f156714adeb82f855fce7b3fcf200fec003869f9f75f75dc4e7a47902b724&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
            <h2 className='fw-6 mb-1'>ООО “Название”</h2>
            <address className='mb-3'>г. Казань, ул. Родины 24, оф. 1</address>
            <ul className='list-unstyled'>
              <li className='mb-1'>
                <a href="tel:+78432405619" className='btn-3 p-3 w-100 justify-content-start'>
                  <IconPhone className='color-2 me-3'/>
                  <span>Позвонить</span>
                </a>
              </li>
              <li className='mb-1'>
                <a href="tel:+78432405619" className='btn-3 p-3 w-100 justify-content-start'>
                  <IconPhone className='color-2 me-3'/>
                  <span>Заказать звонок</span>
                </a>
              </li>
              <li>
                <a href="tel:+78432405619" className='btn-3 p-3 w-100 justify-content-start'>
                  <IconWapp className='color-2 me-3'/>
                  <span>Написать в WhatsApp</span>
                </a>
              </li>
            </ul>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FooterMobile;