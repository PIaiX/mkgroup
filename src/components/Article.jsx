import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import {checkPhotoPath} from "../helpers/checkPhotoPath";

const Article = (props) => {

  const {
    id,
    image,
    className,
    title,
    imageAlt,
    text,
  } = props

  return (
    <article className={className}>
      <Row className='gx-2 gx-sm-3 gx-md-4'>
        <Col xs={6} md={4} lg={3}>
          <img src={checkPhotoPath(image)} alt={imageAlt} />
        </Col>
        <Col xs={6} md={8} lg={9}>
          <h2>{title}</h2>
          <div className={'articleNews'} dangerouslySetInnerHTML={{__html:text}}></div>
          {
            (className === 'pf') &&
            <ul className='mt-3 mt-sm-4'>
              <li>At vero eos et accusamus et iusto</li>
              <li>odio dignissimos ducimus qui blanditiis praesentium</li>
            </ul>
          }
          <Link to={`${id}`} state={props} className='btn-2' >Подробнее</Link>
        </Col>
      </Row>
    </article>
  );
};

export default Article;