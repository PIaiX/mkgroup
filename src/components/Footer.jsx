import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import {ReactComponent as IconLogo} from '../assets/imgs/logo.svg';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={3}>
            <ul>
              <li><Link to='/'>Услуги</Link></li>
              <li><Link to='/'>Портфолио</Link></li>
              <li><Link to='/'>Доставка и оплата</Link></li>
              <li><Link to='/about'>О компании</Link></li>
              <li><Link to='/contacts'>Контакты</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <ul>
              <li><Link to='/'>Склады</Link></li>
              <li><Link to='/'>Фермы</Link></li>
              <li><Link to='/'>Офисы</Link></li>
              <li><Link to='/'>Быстровозводимые здания</Link></li>
              <li><Link to='/'>Кафе и рестораны</Link></li>
            </ul>
          </Col>
          <Col md={2}>
            <ul>
              <li><Link to='/'>Категория</Link></li>
              <li><Link to='/'>Категория</Link></li>
              <li><Link to='/'>Категория</Link></li>
              <li><Link to='/'>Категория</Link></li>
              <li><Link to='/'>Категория</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h2>Не нашли что искали?</h2>
            <p className='mb-4'>Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут</p>
            <button type='button' className='btn-2'>Оставить заявку</button>
          </Col>
        </Row>
        <div className="bottom">
          <div className="logo me-5">
            <IconLogo/>
            <h6>Описание деятельности <br/>или слоган компании</h6>
          </div>
          <h6 className='me-5'>©Copyright</h6>
          <h6><Link to="/" className='bb-1'>Политика конфиденциальности</Link></h6>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;