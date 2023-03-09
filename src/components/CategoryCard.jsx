import React from 'react';
import {Link} from 'react-router-dom';

const CategoryCard = ({imgUrl, title, id}) => {
    return (
        <figure className='category-card'>
            <Link to='/categorie' state={{...title, id}}>
                <img src={imgUrl} alt={title}/>
                <figcaption>
                    <h4>{title}</h4>
                </figcaption>
            </Link>
        </figure>
    );
};

export default CategoryCard;