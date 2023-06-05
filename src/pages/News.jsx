import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import {GetOneNew} from "../services/newsService";
import {useLocation, useParams} from "react-router-dom";
import {checkPhotoPath} from "../helpers/checkPhotoPath";

const News = () => {
  const {state} = useLocation()
  const {newsId} =  useParams()
  const [data, setData] = useState()

  useEffect(()=>{
    if(state)
      setData(state)
    else
      GetOneNew(newsId).then(res=>res && setData(res))

  }, [state])

  return (
    <main>
      <Container>
        <Breadcrumbs namePage={'Новость'}/>
        <section className='sec-6'>
          <h1 className='black'>{data?.title}</h1>
          <div className="inline-block">
            <img src={checkPhotoPath(data?.image)} alt={data?.imageAlt} className='img' />
            <div dangerouslySetInnerHTML={{__html:data?.text}}></div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default News;