import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

const Article = ({className, img, title, mainInf}) => {
  return (
    <article className={className}>
      <Row className='gx-2 gx-sm-3 gx-md-4'>
        <Col xs={6} md={4} lg={3}>
          <img src={img} alt={title} />
        </Col>
        <Col xs={6} md={8} lg={9}>
          <h2>{title}</h2>
          <p>{mainInf}</p>
          {
            (className === 'pf') &&
            <ul className='mt-3 mt-sm-4'>
              <li>At vero eos et accusamus et iusto</li>
              <li>odio dignissimos ducimus qui blanditiis praesentium</li>
            </ul>
          }
          <Link to='12' className='btn-2' >Подробнее</Link>
        </Col>
      </Row>
    </article>
  );
};

export default Article;