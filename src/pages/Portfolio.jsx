import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import Article from '../components/Article';
import PortfolioCard from "../components/PortfolioCard";

const a=[
  {
    img:'imgs/img2.jpg',
    title:'At vero eos et accusamus et iusto',
    articles:[
        'At vero eos et accusamus et iusto'
    ]
  },
  {
    img:'imgs/img2.jpg',
    title:'At vero eos et accusamus et iusto',
    articles:[
      'At vero eos et accusamus et iusto',
      'odio dignissimos ducimus qui blanditiis praesentium'
    ]

  },
  {
    img:'imgs/img2.jpg',
    title:'At vero eos et accusamus et iusto',
    articles:[
      'At vero eos et accusamus et iusto',
      'odio dignissimos ducimus qui blanditiis praesentium',
      'At vero eos et accusamus et iusto',
      'odio dignissimos ducimus qui blanditiis praesentium'
    ]
  },

]

const Portfolio = () => {
  const [news, setNews] = useState(a);

  return (
    <main>
      <Container>
        <Breadcrumbs/>

        <section className='sec-8 mb-md-5'>
          <PageTitle title={'Портфолио'} text={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum '}/>
          {news.map((element, index)=>
              <PortfolioCard key={index} {...element} className='pf'/>
          )}
        </section>
      </Container>
    </main>
  );
};

export default Portfolio;