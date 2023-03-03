import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import {ReactComponent as IconLogo} from '../assets/imgs/logo.svg';
import {ReactComponent as IconBurger} from '../assets/imgs/icons/burger.svg';

const HeaderMobile = () => {
  return (
    <header>
      <Container className='top'>
        <Link to='/' className="logo">
          <IconLogo/>
        </Link>
        <button type='button' className='menu-btn'>
          <IconBurger/>
        </button>
      </Container>
    </header>
  );
};

export default HeaderMobile;