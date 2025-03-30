import React from 'react'
import MainBAnner from "../../components/sale/MainBanner";
import HotProducts from "../../components/sale/HotProducts";
import NewArrival from '../../components/sale/newArrival';
import Accessories from '../../components/sale/Accessories';
import Brand from "../../components/sale/Brand";
import About from "../../components/sale/About";
import {companyDetail} from "../../../public/json/sale.json";
const Sale = () => {
  return (
    <div className='space_betweeen'>
      <MainBAnner className='space_betweeen_card remove_space_betweeen'/>
      <HotProducts className='space_betweeen_card'/>
      <NewArrival className='space_betweeen_card'/>
      <Accessories className='space_betweeen_card'/>
      <Brand className='space_betweeen_card'/>
      <About className='space_betweeen_card'/>
      <div className='flex flex-col gap-1 mb-12'>
        <span className='text-2xl font-semibold text-primaryColor dark:text-primaryColor'>{companyDetail.name}</span>
        <span className='text-neutral500 text-sm font-bold'>{companyDetail.thumnail}</span>
      </div>
    </div>
  )
}

export default Sale