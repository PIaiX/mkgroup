import React from 'react';

const CategoryCard = (props) => {
  return (
    <figure className='category-card'>
      <img src={props.imgUrl} alt={props.title} />
      <figcaption><h4>{props.title}</h4></figcaption>
    </figure>
  );
};

export default CategoryCard;