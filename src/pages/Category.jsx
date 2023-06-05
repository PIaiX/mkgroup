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

        <section className='mb-35'>
          <Row className='justify-content-center'>
            <Col xs={12} lg={8}>
              <h2 className='mb-4 mb-xl-5'>{category?.name}</h2>
              <p>{category?.description}</p>
              <div className="table-colored mt-4 mt-xl-5">
                <table>
                  <thead>
                    <tr>
                      <th>№</th>
                      <th>At vero eos et accusamus et iusto</th>
                      <th>Цена,&nbsp;₽</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>At vero eos et accusamus </td>
                      <td>от 2000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
            <Col xs={12} sm={8} md={6} lg={4} className='mt-4 mt-sm-5 mt-lg-0'>
              <Callback2/>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default Category;