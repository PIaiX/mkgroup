import React from 'react';
import {Link} from 'react-router-dom';
import FunctionForPrice from '../helpers/FunctionForPrice'
const ProjectCard = ({name, img, id, priceFrom, amount, isHit}) => {
  return (
    <figure className='project-card'>
      <img src={img} alt={name} />
      <figcaption>
        <h5><Link to={`/project/${id}`} className='stretched-link'>{name}</Link></h5>
        <div className="d-sm-flex justify-content-between align-items-baseline">
          <div className='fw-6'>от {FunctionForPrice(priceFrom)} ₽</div>
          <div className='fs-07'>цена за {FunctionForPrice(amount)} тонну</div>
        </div>
      </figcaption>
        {isHit && <div className="marking">Хит продаж</div>}
    </figure>
  );
};

export default ProjectCard;