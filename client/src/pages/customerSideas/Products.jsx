import React from 'react'
import Filter from '../../components/products/Filter';
import ShowCase from '../../components/products/ShowCase';
import Banner from '../../components/common/Banner';
import {bannerImg} from "../../../public/json/products.json";
const Products = () => {
  return (
    <div className='space_betweeen my-8'>
        <Filter />
        <Banner werient="1" images={bannerImg} />
        <ShowCase />
    </div>
  )
}

export default Products