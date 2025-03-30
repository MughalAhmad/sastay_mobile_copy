import React from 'react'
import Heading from "../common/Heading";
import {hotProducts} from "../../../public/json/sale.json";
import Banner from '../common/Banner';
import SecondaryCarousel from '../sale/SecondaryCarousel';
const HotProducts = ({className}) => {

  return (
    <div className={`${className}`}>
        <Heading title={hotProducts.title} subTitle={hotProducts.sunTitle}/>
        <div className=' w-full flex flex-col lg:flex-row gap-5 justify-between items-start'>

        <div className='w-full lg:w-1/2'>
        <Banner werient="1" images={hotProducts.firstImg} />
        </div>

        <div className='w-full lg:w-1/2'>
        <SecondaryCarousel slides={hotProducts.list} />
        </div>

        </div>

        <div className='flex flex-col gap-2'>
        <Banner werient="1" images={hotProducts.mainBanner} />
        <Banner werient="2" images={hotProducts.images} />
        </div>

    </div>
  )
}

export default HotProducts