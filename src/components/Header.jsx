import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import {ReactComponent as IconLogo} from '../assets/imgs/logo.svg';
import {ReactComponent as IconPhone} from '../assets/imgs/icons/phone.svg';
import {ReactComponent as IconGrid} from '../assets/imgs/icons/grid.svg';
import {ReactComponent as IconMagnifier} from '../assets/imgs/icons/magnifier.svg';

const Header = () => {
  return (
    <header>
      <Container className='top'>
        <nav>
          <ul className='menu-1'>
            <li><Link to='/'>Главная</Link></li>
            <li><Link to='/'>Услуги</Link></li>
            <li><Link to='/'>Портфолио</Link></li>
            <li><Link to='/'>О компании</Link></li>
            <li><Link to='/news'>Новости</Link></li>
            <li><Link to='/contacts'>Контакты</Link></li>
          </ul>
        </nav>
        <address>г. Казань, ул. Родины 24, оф. 1</address>
      </Container>
      <hr />
      <Container className='middle'>
        <Link to='/' className="logo">
          <IconLogo/>
          <h6>Описание деятельности <br/>или слоган компании</h6>
        </Link>
        <button type='button' className='btn-1 align-items-baseline'>
          <IconGrid className='fs-07'/>
          <span className='ms-2'>Каталог</span>
        </button>
        <form action="" className='form-search'>
          <input type="search" placeholder='Я ищу...'/>
          <button type='submit'><IconMagnifier/></button>
        </form>
        <a href="tel:+78432405619" className='d-flex align-items-center'>
          <span className='fs-13 me-2'>+7 843 240-56-19</span>
          <IconPhone className='color-1'/>
        </a>
      </Container>
      <hr />
      <Container>
        <nav>
          <ul className='menu-2'>
            <li><Link to='/'>Склады</Link></li>
            <li><Link to='/'>Фермы</Link></li>
            <li><Link to='/'>Промышленные здания</Link></li>
            <li><Link to='/'>Быстровозводимые здания</Link></li>
            <li><Link to='/'>Опоры ЛЭП</Link></li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;