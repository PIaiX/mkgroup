import React from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import Article from '../components/Article';

const AllNews = () => {
  return (
    <main>
      <Container>
        <Breadcrumbs/>

        <section className='sec-5'>
          <PageTitle title={'Новости'} text={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum '}/>

          <Article className='news'/>
          <Article className='news'/>
          <Article className='news'/>
          <Article className='news'/>
        </section>
      </Container>
    </main>
  );
};

export default AllNews;