import React, {useEffect, useReducer, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import Callback2 from '../components/forms/Callback2';
import ProjectCard from '../components/ProjectCard';
import {useLocation} from 'react-router-dom';
import {getManyAds, getManyAdsBySearch} from "../services/AdsService";
import {useSelector} from "react-redux";
import {useAppSelector} from "../store";

const Category = () => {
  const {state} = useLocation()
  const categories = useAppSelector(state => state.app.categories)
  const [category, setCategory] = useState()
  const [filterData, setFilterData] = useReducer((state, newstate)=>({...state, ...newstate}))
  const [manyAds, setManyAds] = useState()


  useEffect(()=>{
    if(state?.id)
      setFilterData({categoryId:state?.id})
    else if(state?.searchInput){
      getManyAdsBySearch(state?.searchInput).then(res=>res && setManyAds(res))
    }
  }, [state])

  useEffect(()=>{
    if(filterData?.categoryId)
      getManyAds(filterData).then(res=>res && setManyAds(res?.body))
  },[filterData])

  useEffect(()=>{
    if(filterData?.categoryId)
      setCategory(categories?.find(element=>element.id==filterData?.categoryId))
    else
      setCategory({name:'Поиск по сайту'})
  }, [filterData?.categoryId])

  console.log(categories)
  return (
    <main>
      <Container>
        <section className='d-none d-lg-block sec-2'>
          <h2>Выберите категорию</h2>
          <ul className="list-unstyled d-flex flex-wrap justify-content-start align-items-center">
            {categories && categories?.map((element, index)=>
                <li key ={index} className='me-3 mb-4'>
                  <div className={`btn-4 ${filterData?.categoryId==element.id && 'active'}`} onClick={()=>setFilterData({categoryId:element?.id})}>{element.name}</div>
                </li>
            )}
          </ul>
        </section>
      </Container>
      <hr className='d-none d-lg-block'/>
      <Container>
        <Breadcrumbs namePage={category?.name}/>

        <section className='sec-3 mb-35'>
          <PageTitle title={category?.name} text={category?.description}/>
          {manyAds?.length>0?
              <>
                <h2>Выберите типовой проект нужного размера</h2>
                <Row xs={2} md={3} lg={4} className='gx-2 gx-sm-4 gy-4 gy-sm-5'>
                  {manyAds?.map((element, index)=>
                      <Col key={index}><ProjectCard {...element} /></Col>
                  )}
                </Row>
              </>
              :<h1>Товаров не найдено</h1>
          }
        </section>
      </Container>
    </main>
  );
};

export default Category;