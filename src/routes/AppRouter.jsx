import React from 'react'
import {createHashRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import About from '../pages/About'
import AllNews from '../pages/AllNews'
import Contacts from '../pages/Contacts'
import Home from '../pages/Home'
import News from '../pages/News'
import Portfolio from '../pages/Portfolio'
import PortfolioItem from '../pages/PortfolioItem'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About/>}/>
      <Route path="portfolio" element={<Portfolio/>}/>
      <Route path="portfolio/:portfolioId" element={<PortfolioItem/>} />
      <Route path="contacts" element={<Contacts/>}/>
      <Route path="news" element={<AllNews/>}/>
      <Route path="news/:newsId" element={<News/>} />
    </Route>
  )
)

const AppRouter = () => {
  return <RouterProvider router={router} />
};

export default AppRouter;