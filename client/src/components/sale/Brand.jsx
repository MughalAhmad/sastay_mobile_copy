import React from 'react'
import Heading from "../common/Heading";
import {brand} from "../../../public/json/sale.json";
import Banner from '../common/Banner';

const Brand = ({className}) => {
  return (
    <div className={`${className}`}>
    <Heading title={brand.title} subTitle={brand.sunTitle}/>

    <div className={`relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_50%)] dark:before:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_50%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_50%)] dark:after:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_50%)] after:content-['']`}>
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {brand.brandList.map((logo, index) => (
          <img src={logo} alt='none' key={index} className="slide flex w-[125px] items-center justify-center mr-4"/>
        ))}
        {brand.brandList.map((logo, index) => (
        <img src={logo} alt='none' key={index} className="slide flex w-[125px] items-center justify-center mr-4"/>
        ))}
      </div>
    </div>

    <Banner werient="1" images={brand.img}/>

</div>
  )
}

export default Brand
