import React, {useEffect, useReducer, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumbs from '../components/Breadcrumbs';
import PageTitle from '../components/utils/PageTitle';
import Callback2 from '../components/forms/Callback2';
import ProjectCard from '../components/ProjectCard';
import {useLocation} from 'react-router-dom';
import {getManyAds} from "../services/AdsService";
import {useSelector} from "react-redux";

//delete consts
const a=[{
    name:'Сварная балка ГОСТ 8240–89 армированная',
    img:'imgs/img2.jpg',
    id:'1',
    priceFrom:2333,
    amount:2,
    isHit:true
  },
  {
    name:'Сварная балка ГОСТ 8240–89 армированная',
    img:'imgs/img2.jpg',
    id:'1',
    priceFrom:2333,
    amount:2,
    isHit:true
  },
  {
    name:'Сварная балка ГОСТ 8240–89 армированная',
    img:'imgs/img2.jpg',
    id:'1',
    priceFrom:2333,
    amount:2
  },
  {
    name:'Сварная балка ГОСТ 8240–89 армированная',
    img:'imgs/img2.jpg',
    id:'1',
    priceFrom:2333,
    amount:2,
    isHit:true
  },
  {
    name:'Сварная балка ГОСТ 8240–89 армированная',
    img:'imgs/img2.jpg',
    id:'1',
    priceFrom:2333,
    amount:2
  },
  {
    name:'Сварная балка ГОСТ 8240–89 армированная',
    img:'imgs/img2.jpg',
    id:'1',
    priceFrom:2333,
    amount:2,
    isHit:true
  },
  {
    name:'Сварная балка ГОСТ 8240–89 армированная',
    img:'imgs/img2.jpg',
    id:'1',
    priceFrom:2333,
    amount:2
  },]

const Categorie = () => {
  const {state} = useLocation()
  const {categories} = useSelector(state => state.category)
  const [category, setCategory] = useState(  state?{...state}:{id:0, name:'Ангары'})
  const [filterData, setFilterData] = useReducer((state, newstate)=>({...state, ...newstate}), {category})
  const [manyAds, setManyAds] = useState(a)


  useEffect(()=>{
    state && setCategory({...state})
  }, [state])

  useEffect(()=>{
    getManyAds(filterData).then(res=>res && setManyAds(res))
  },[category])

  return (
    <main>
      <Container>
        <section className='d-none d-lg-block sec-2'>
          <h2>Выберите категорию</h2>
          <ul className="list-unstyled d-flex flex-wrap justify-content-start align-items-center">
            {categories && categories.map((element, index)=>
                <li key ={index} className='me-3 mb-4'>
                  <div className={`btn-4 ${category.id==element.id && 'active'}`} onClick={()=>setCategory(element)}>{element.title}</div>
                </li>
            )}
          </ul>
        </section>
      </Container>
      <hr className='d-none d-lg-block'/>
      <Container>
        <Breadcrumbs/>

        <section className='sec-3 mb-35'>
          <PageTitle title={category.name} text={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum '}/>
          <h2>Выберите типовой проект нужного размера</h2>
          <Row xs={2} md={3} lg={4} className='gx-2 gx-sm-4 gy-4 gy-sm-5'>
            {manyAds && manyAds.map((element, index)=>
                <Col key={index}><ProjectCard {...element} /></Col>
            )}
          </Row>
        </section>

        <section className='mb-35'>
          <Row className='justify-content-center'>
            <Col xs={12} lg={8}>
              <h2 className='mb-4 mb-xl-5'>Наименование категории</h2>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
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

export default Categorie;