import React from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import Article from '../components/Article';

const Portfolio = () => {
  return (
    <main>
      <Container>
        <Breadcrumbs/>

        <section className='sec-8 mb-md-5'>
          <PageTitle title={'Портфолио'} text={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum '}/>

          <Article className={'pf'}/>
          <Article className={'pf'}/>
          <Article className={'pf'}/>
          <Article className={'pf'}/>
        </section>
      </Container>
    </main>
  );
};

export default Portfolio;