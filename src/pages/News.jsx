import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import {GetOneNew} from "../services/newsService";
import {useLocation, useParams} from "react-router-dom";
import {checkPhotoPath} from "../helpers/checkPhotoPath";
import useLoading from "../hooks/useLoading";
import Loader from "../components/Loader";

const News = () => {
  const {newsId} =  useParams()
  const [data] = useLoading([()=>GetOneNew(newsId)])

  if (data == 'loading')
    return <Loader/>

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