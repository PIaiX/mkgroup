import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import Article from '../components/Article';
import {getAllNews} from "../services/newsService";
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
  const [news, setNews] = useState(a);
  useEffect(()=>{
    getAllNews().then(res=>res && setNews)
  }, [])

  return (
    <main>
      <Container>
        <Breadcrumbs/>
        <section className='sec-5'>
          <PageTitle title={'Новости'} text={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum '}/>
          {news.map((element, index)=>
            <Article key={index} {...element} className='news'/>
          )}
        </section>
      </Container>
    </main>
  );
};

export default AllNews;