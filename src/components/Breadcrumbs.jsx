import React from 'react';
import {Link} from 'react-router-dom';

const Breadcrumbs = ({namePage='Название страницы'}) => {
  return (
    <nav className='breadcrumbs'>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/">{namePage}</Link></li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;