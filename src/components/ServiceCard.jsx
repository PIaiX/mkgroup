import React from 'react';
import {Link} from 'react-router-dom';

const ServiceCard = ({id, img, title, inf}) => {
  return (
    <figure className='service'>
      <img src={img} alt={title} />
      <figcaption>
        <h4>{title}</h4>
        <p>{inf}</p>
        <Link to={`${id}`} className='btn-2'>Подробнее</Link>
      </figcaption>
    </figure>
  );
};

export default ServiceCard;