import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import {getOneNew} from "../services/newsService";
import {useParams} from "react-router-dom";

const a={
  mainInf:'Заголовок интересных новостей',
  articles:[
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga.',
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga.',
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga.',
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, est laborum et dolorum fuga.',
  ],
    img:"../imgs/img2.jpg"
}

const News = () => {
  const {id} =  useParams()
  const [data, setData] = useState(a)


  useEffect(()=>{
    getOneNew(id).then(res=>res && setData(res))
  }, [])

  return (
    <main>
      <Container>
        <Breadcrumbs/>

        <section className='sec-6'>
          <h1 className='black'>{data.mainInf}</h1>
          <div className="inline-block">
            <img src={data.img} alt={data.mainInf} className='img' />
            {data.articles.map((element, index)=>
                <p key={index}>{element}</p>
            )}
          </div>
        </section>
      </Container>
    </main>
  );
};

export default News;