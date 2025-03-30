import React from 'react'
import Navbar from "../../components/common/Navbar";
import Header from '../../components/common/Header';
import TopBanner from "../../components/common/TopBanner";
import Footer from "../../components/common/Footer";
import {Outlet} from "react-router-dom"
const Layout = () => {
  return (
    <div className='bg-reversSimpleColor'>
        <Header className="maxWidth"/>
        <TopBanner className="maxWidth"/>
        <Navbar className="maxWidth"/>
        <div className='max-w-[1440px] m-auto'>
        <Outlet/>
        </div>
        <Footer className="maxWidth"/>
    </div>
  )
}

export default Layout