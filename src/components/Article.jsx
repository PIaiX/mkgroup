import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

const Article = () => {
  return (
    <article>
      <Row className='gx-2 gx-sm-3 gx-md-4'>
        <Col xs={6} md={4} lg={3}>
          <img src="imgs/img2.jpg" alt="At vero eos et accusamus et iusto" />
        </Col>
        <Col xs={6} md={8} lg={9}>
          <h2>At vero eos et accusamus et iusto</h2>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
          <Link to='12' className='btn-2'>Подробнее</Link>
        </Col>
      </Row>
    </article>
  );
};

export default Article;