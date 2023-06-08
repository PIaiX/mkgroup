import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import Article from '../components/Article';
import {GetAllNews} from "../services/newsService";
import useLoading from "../hooks/useLoading";
import Loader from "../components/Loader";
//delete
const a=[
  {
    id:2,
    img:'imgs/img2.jpg',
    title:'At vero eos et accusamus et iusto',
    mainInf:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti'
  },
  {
    id:2,
    img:'imgs/img2.jpg',
    title:'At vero eos et accusamus et iusto',
    mainInf:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti'
  },
  {
    id:2,
    img:'imgs/img2.jpg',
    title:'At vero eos et accusamus et iusto',
    mainInf:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti'
  },
]

const AllNews = () => {
  const [news] = useLoading({func:()=>GetAllNews({page:1, limit:20})})

  if (news == 'loading')
    return <Loader/>

  return (
    <main>
      <Container>
        <Breadcrumbs namePage={'Новости'}/>
        <section className='sec-5'>
          <PageTitle title={'Новости'} text={''}/>
          {news?.length>0?
              news?.map((element, index)=>
                  <Article key={index} {...element} className='news'/>
              )
              :<h1 className={'d-flex justify-content-center'}>Нет новостей</h1>
          }
        </section>
      </Container>
    </main>
  );
};

export default AllNews;