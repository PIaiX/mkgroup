import React, {useEffect} from 'react';
import {Outlet, ScrollRestoration, useLocation} from 'react-router-dom';
import Footer from '../components/Footer';
import FooterMobile from '../components/FooterMobile';
import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import useIsMobile from '../hooks/isMobile';

const AppLayout = () => {
    const {mobile} = useIsMobile('991px');
    const {pathname} = useLocation()

    useEffect(()=>{
        const timer = setTimeout(() => {
            window.scrollTo(0,0)
        }, 500);
        return () => clearTimeout(timer);
    },[pathname])

    return (
      <>
        <ScrollRestoration />
        {
          (mobile) 
          ? <HeaderMobile/>
          : <Header />
        }
        <Outlet />
        {
          (mobile) 
          ? <FooterMobile/>
          : <Footer />
        }
      </>
  )
}

export default AppLayout