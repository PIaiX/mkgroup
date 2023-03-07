import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';
import {ReactComponent as IconLogo} from '../assets/imgs/logo.svg';
import {ReactComponent as IconBurger} from '../assets/imgs/icons/burger.svg';
import {ReactComponent as IconHome} from '../assets/imgs/icons/home.svg';
import {ReactComponent as IconArrow} from '../assets/imgs/icons/next2.svg';
import {ReactComponent as IconServices} from '../assets/imgs/icons/services.svg';
import {ReactComponent as IconCase} from '../assets/imgs/icons/case.svg';
import {ReactComponent as IconInfo} from '../assets/imgs/icons/info.svg';
import {ReactComponent as IconNews} from '../assets/imgs/icons/news.svg';
import {ReactComponent as IconPhone} from '../assets/imgs/icons/phone.svg';

const HeaderMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);
  return (
    <>
      <header className='mobile'>
        <Container className='top'>
          <Link to='/' className="logo">
            <IconLogo/>
          </Link>
          <button type='button' onClick={(showMenu)?handleCloseMenu:handleShowMenu} className='menu-btn'>
            <IconBurger className={(showMenu)?'cross':''}/>
          </button>
        </Container>
      </header>
      <Offcanvas show={showMenu} onHide={handleCloseMenu} placement={'end'}>
        <Offcanvas.Body>
          <div className="box">
          <img src="imgs/img2.jpg" alt="img2" className='img'/>
          </div>
          <nav>
            <ul>
              <li>
                <Link to='/'>
                  <IconHome className='color-2 me-3'/>
                  <span>Главная</span>
                  <IconArrow className='achromat-4 fs-08'/>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to='/'>
                  <IconServices className='color-2 me-3'/>
                  <span>Услуги</span>
                  <IconArrow className='achromat-4 fs-08'/>
                </Link>
              </li>
              <li>
                <Link to='/portfolio'>
                  <IconCase className='color-2 me-3'/>
                  <span>Портфолио</span>
                  <IconArrow className='achromat-4 fs-08'/>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to='/about'>
                  <IconInfo className='color-2 me-3'/>
                  <span>О компании</span>
                  <IconArrow className='achromat-4 fs-08'/>
                </Link>
              </li>
              <li>
                <Link to='/news'>
                  <IconNews className='color-2 me-3'/>
                  <span>Новости</span>
                  <IconArrow className='achromat-4 fs-08'/>
                </Link>
              </li>
              <li>
                <Link to='/contacts'>
                  <IconPhone className='color-2 me-3'/>
                  <span>Контакты</span>
                  <IconArrow className='achromat-4 fs-08'/>
                </Link>
              </li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HeaderMobile;