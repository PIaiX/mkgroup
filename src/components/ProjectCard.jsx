import React from 'react';
import {Link} from 'react-router-dom';

const ProjectCard = () => {
  return (
    <figure className='project-card'>
      <img src="imgs/img2.jpg" alt="Сварная балка ГОСТ 8240–89 армированная" />
      <figcaption>
        <h5><Link to='/catalog/categorie/project' className='stretched-link'>Сварная балка ГОСТ 8240–89 армированная</Link></h5>
        <div className="d-sm-flex justify-content-between align-items-baseline">
          <div className='fw-6'>от 2 333 ₽</div>
          <div className='fs-07'>цена за 1 тонну</div>
        </div>
      </figcaption>
      <div className="marking">Хит продаж</div>
    </figure>
  );
};

export default ProjectCard;