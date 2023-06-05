import React from 'react';
import {Link} from 'react-router-dom';
import {checkPhotoPath} from "../helpers/checkPhotoPath";

const CategoryCard = (props) => {
    const {image, name} = props
    return (
        <figure className='category-card'>
            <Link to='/category' state={props}>
                <img src={checkPhotoPath(image)} alt={name}/>
                <figcaption>
                    <h4>{name}</h4>
                </figcaption>
            </Link>
        </figure>
    );
};

export default CategoryCard;