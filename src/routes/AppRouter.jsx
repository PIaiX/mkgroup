import React from 'react'
import {createHashRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import About from '../pages/About'
import AllNews from '../pages/AllNews'
import Catalog from '../pages/Catalog'
import Categorie from '../pages/Categorie'
import Contacts from '../pages/Contacts'
import Delivery from '../pages/Delivery'
import Home from '../pages/Home'
import News from '../pages/News'
import Portfolio from '../pages/Portfolio'
import PortfolioItem from '../pages/PortfolioItem'
import ProjectPage from '../pages/ProjectPage'
import ServicePage from '../pages/ServicePage'
import Services from '../pages/Services'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />}/>
      <Route path="catalog" element={<Catalog/>}/>
      <Route path="catalog/categorie" element={<Categorie/>}/>
      <Route path="catalog/categorie/project" element={<ProjectPage/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="services/:serviceId" element={<ServicePage/>}/>
      <Route path="portfolio" element={<Portfolio/>}/>
      <Route path="portfolio/:portfolioId" element={<PortfolioItem/>} />
      <Route path="contacts" element={<Contacts/>}/>
      <Route path="delivery" element={<Delivery/>}/>
      <Route path="news" element={<AllNews/>}/>
      <Route path="news/:newsId" element={<News/>} />
    </Route>
  )
)

const AppRouter = () => {
  return <RouterProvider router={router} />
};

export default AppRouter;