import React, {useEffect} from 'react';
import {Outlet, ScrollRestoration} from 'react-router-dom';
import Footer from '../components/Footer';
import FooterMobile from '../components/FooterMobile';
import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import useIsMobile from '../hooks/isMobile';
import {useDispatch} from "react-redux";
import ChangeLocation from "./ChangeLocation";
import {GetAllCategory, GetBanner, GetInformation} from "../services/Options";
import {initFingerprint} from "../store/slices/app/Action";
import {useAppAction} from "../store";

const AppLayout = () => {
    const {mobile} = useIsMobile('991px')
    const fingerprint = localStorage.getItem('fingerprint')
    const dispatch = useDispatch()
    const {RequestShowInit} = useAppAction()
    useEffect(() => {
        dispatch(GetBanner())
        dispatch(RequestShowInit())
        dispatch(GetAllCategory())
        dispatch(GetInformation())
        if (!fingerprint)
            dispatch(initFingerprint())
    }, [fingerprint])

    return (
      <>
        <ScrollRestoration />
        {
          (mobile) 
          ? <HeaderMobile/>
          : <Header />
        }
        <ChangeLocation>
            <Outlet />
        </ChangeLocation>
        {
          (mobile) 
          ? <FooterMobile/>
          : <Footer />
        }
      </>
  )
}

export default AppLayout