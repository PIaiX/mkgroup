import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import {ReactComponent as IconPhone} from '../assets/imgs/icons/phone.svg';
import {ReactComponent as IconServices} from '../assets/imgs/icons/services.svg';
import {ReactComponent as IconHome} from '../assets/imgs/icons/home.svg';
import {ReactComponent as IconCatalog} from '../assets/imgs/icons/catalog.svg';
import {ReactComponent as IconCase} from '../assets/imgs/icons/case.svg';

const FooterMobile = () => {
  return (
    <footer className='mobile'>
      <Container className='h-100'>
        <nav className='h-100'>
          <ul className='h-100'>
            <li>
              <Link to='/' className='active'>
                <IconHome/>
                <h6>Главная</h6>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <IconCase/>
                <h6>Портфолио</h6>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <IconCatalog/>
                <h6>Каталог</h6>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <IconServices/>
                <h6>Услуги</h6>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <IconPhone/>
                <h6>Контакты</h6>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
};

export default FooterMobile;