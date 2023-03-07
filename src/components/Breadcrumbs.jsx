import React from 'react';
import {Link} from 'react-router-dom';

const Breadcrumbs = () => {
  return (
    <nav className='breadcrumbs'>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/">Контакты</Link></li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;