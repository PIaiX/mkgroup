import React from 'react';
import {Link} from 'react-router-dom';

const CategoryCard = (props) => {
  return (
    <figure className='category-card'>
      <img src={props.imgUrl} alt={props.title} />
      <figcaption>
        <h4><Link className='stretched-link' to='/catalog/categorie'>{props.title}</Link></h4>
      </figcaption>
    </figure>
  );
};

export default CategoryCard;