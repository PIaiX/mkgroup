import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import Article from '../components/Article';
import PortfolioCard from "../components/PortfolioCard";
import useLoading from "../hooks/useLoading";
import {GetAllPortfolios} from "../services/portfolio";
import Loader from "../components/Loader";
const Portfolio = () => {
  const [portfolios] = useLoading([()=>GetAllPortfolios()])

  if (portfolios == 'loading')
    return <Loader/>

  return (
    <main>
      <Container>
        <Breadcrumbs namePage={'Портфолио'}/>

        <section className='sec-8 mb-md-5'>
          <PageTitle title={'Портфолио'} text={''}/>
          {portfolios?.map((element, index)=>
              <PortfolioCard key={index} {...element} className='pf'/>
          )}
        </section>
      </Container>
    </main>
  );
};

export default Portfolio;