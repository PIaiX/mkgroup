import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link, NavLink} from 'react-router-dom';
import {ReactComponent as IconLogo} from '../assets/imgs/logo.svg';
import {ReactComponent as IconPhone} from '../assets/imgs/icons/phone.svg';
import {ReactComponent as IconGrid} from '../assets/imgs/icons/grid.svg';
import {ReactComponent as IconMagnifier} from '../assets/imgs/icons/magnifier.svg';

const Header = () => {
  return (
    <>
    <header className='top'>
      <Container>
        <nav>
          <ul className='menu-1'>
            <li><NavLink to='/'>Главная</NavLink></li>
            <li><NavLink to='/services'>Услуги</NavLink></li>
            <li><NavLink to='/portfolio'>Портфолио</NavLink></li>
            <li><NavLink to='/about'>О компании</NavLink></li>
            <li><NavLink to='/news'>Новости</NavLink></li>
            <li><NavLink to='/contacts'>Контакты</NavLink></li>
          </ul>
        </nav>
        <address>г. Казань, ул. Родины 24, оф. 1</address>
      </Container>
    </header>
    <header className='middle'>
      <Container>
        <Link to='/' className="logo">
          <IconLogo/>
          <h6>Описание деятельности <br/>или слоган компании</h6>
        </Link>
        <Link to='/catalog' className='btn-1 align-items-baseline'>
          <IconGrid className='fs-07'/>
          <span className='ms-2'>Каталог</span>
        </Link>
        <form action="" className='form-search'>
          <input type="search" placeholder='Я ищу...'/>
          <button type='submit'><IconMagnifier/></button>
        </form>
        <a href="tel:+78432405619" className='d-flex align-items-center'>
          <span className='fs-13 me-2'>+7 843 240-56-19</span>
          <IconPhone className='color-1'/>
        </a>
      </Container>
    </header>
    <header className='bottom'>
      <Container className='h-100 d-flex align-items-center'>
        <nav className='w-100'>
          <ul className='menu-2'>
            <li><Link to='/catalog/categorie'>Склады</Link></li>
            <li><Link to='/catalog/categorie'>Фермы</Link></li>
            <li><Link to='/catalog/categorie'>Промышленные здания</Link></li>
            <li><Link to='/catalog/categorie'>Быстровозводимые здания</Link></li>
            <li><Link to='/catalog/categorie'>Опоры ЛЭП</Link></li>
          </ul>
        </nav>
      </Container>
    </header>
    </>
  );
};

export default Header;