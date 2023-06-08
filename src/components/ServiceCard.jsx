import React from 'react';
import {Link} from 'react-router-dom';
import {checkPhotoPath} from "../helpers/checkPhotoPath";

const ServiceCard = (props) => {
    const {id, image, title, description} = props
    return (
        <figure className='service'>
            <img src={checkPhotoPath(image)} alt={title}/>
            <figcaption>
                <h4>{title}</h4>
                {/*<div dangerouslySetInnerHTML={{__html:description}}></div>*/}
                <Link to={`${id}`} className='btn-2'>Подробнее</Link>
            </figcaption>
        </figure>
    );
};

export default ServiceCard;