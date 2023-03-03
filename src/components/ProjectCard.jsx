import React from 'react';

const ProjectCard = () => {
  return (
    <figure className='project-card'>
      <img src="imgs/img2.jpg" alt="Сварная балка ГОСТ 8240–89 армированная" />
      <figcaption>
        <h5>Сварная балка ГОСТ 8240–89 армированная</h5>
        <div className="d-flex justify-content-between align-items-baseline">
          <div className='fw-6'>от 2 333 ₽</div>
          <div className='fs-07'>цена за 1 тонну</div>
        </div>
      </figcaption>
      <div className="marking">Хит продаж</div>
    </figure>
  );
};

export default ProjectCard;