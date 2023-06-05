import React from 'react';
import {Link} from 'react-router-dom';
import FunctionForPrice from '../helpers/FunctionForPrice'
import {checkPhotoPath} from "../helpers/checkPhotoPath";

const ProjectCard = (props) => {
    const {name, image, id, price, priceFor, isHit} = props
    return (
        <figure className='project-card'>
            <img src={checkPhotoPath(image)} alt={name}/>
            <figcaption>
                <h5><Link to={`/project/${id}`} className='stretched-link'>{name}</Link></h5>
                <div className="d-sm-flex justify-content-between align-items-baseline">
                    <div className='fw-6'>от {FunctionForPrice(price)} ₽</div>
                    <div className='fs-07'>цена за {priceFor}</div>
                </div>
            </figcaption>
            {isHit && <div className="marking">Хит продаж</div>}
        </figure>
    );
};

export default ProjectCard;