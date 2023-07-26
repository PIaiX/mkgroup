import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {ReactComponent as IconLogo} from '../assets/imgs/logo.svg';
import {ReactComponent as IconPhone} from '../assets/imgs/icons/phone.svg';
import {ReactComponent as IconGrid} from '../assets/imgs/icons/grid.svg';
import {ReactComponent as IconMagnifier} from '../assets/imgs/icons/magnifier.svg';
import {useAppSelector} from "../store";

const Header = () => {

  const categories = useAppSelector(state => state.app.categories)
  const information = useAppSelector(state => state.app.information)
  const [searchInput, setSearchInput] = useState()
  const navigate = useNavigate()

  const SubmitClick = (e) =>{
    e.preventDefault()
    if(searchInput?.length>0)
      navigate('/category', {state:{searchInput}})
  }

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
          <h6>Изготовление <br/>металлоконструкций</h6>
        </Link>
        <Link to='/catalog' className='btn-1 align-items-baseline'>
          <IconGrid className='fs-07'/>
          <span className='ms-2'>Каталог</span>
        </Link>
        <form className='form-search' onSubmit={SubmitClick}>
          <input value={searchInput} type="search" placeholder='Я ищу...' onChange={e=>setSearchInput(e.target.value)} />
          <button type='submit'><IconMagnifier/></button>
        </form>
        {/* <a href={`tel:${information?.phone}`} className='d-flex align-items-center'>
          <span className='fs-13 me-2'>{information?.phone}</span>
          <IconPhone className='color-1'/>
        </a> */}
        <a href="tel:89662405619" className='d-flex align-items-center'>
          <span className='fs-13 me-2'>8 (966) 240-56-19</span>
          <IconPhone className='color-1'/>
        </a>
      </Container>
    </header>
    <header className='bottom'>
      <Container className='h-100 d-flex align-items-center'>
        <nav className='w-100'>
          <ul className='menu-2'>
            {categories?.map((element, index)=>
                <li key={index}><Link to={'/category'} state={element}>{element.name}</Link></li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
    </>
  );
};

export default Header;