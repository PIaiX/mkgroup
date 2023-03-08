import React from 'react';
import {Link} from 'react-router-dom';

const ServiceCard = () => {
  return (
    <figure className='service'>
      <img src="imgs/img2.jpg" alt="service" />
      <figcaption>
        <h4>At vero eos et accusamus</h4>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos</p>
        <Link to='42' className='btn-2'>Подробнее</Link>
      </figcaption>
    </figure>
  );
};

export default ServiceCard;