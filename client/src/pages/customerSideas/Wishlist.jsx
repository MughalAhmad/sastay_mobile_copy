import React from 'react'
import Heading from '../../components/common/Heading';
import Card from '../../components/common/Card';
const Wishlist = () => {
    const list =[
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",

    ]
  return (
    <div className='space_betweeen my-7'>
           <Heading title="MY WISHLIST" subTitle="All Your Wishes in One Place"/>


      <div className='flex justify-center'>
        <span className="py-3 w-40 border-2 border-primaryColor text-simpleColor h-full flex justify-center items-center text-xs md:text-sm font-bold cursor-pointer">SHARE WISHLIST</span>
        <span className="py-3 w-40 border-2 border-primaryColor bg-primaryColor text-reversSimpleColor h-full flex justify-center items-center text-xs md:text-sm font-bold cursor-pointer">CLEAR ALL</span>
      </div>

<div className='flex flex-wrap justify-center md:justify-between gap-5'>
{list.map((item, index)=>(
    <Card img={item} key={index} btn={true} />
))}
</div>

    </div>
  )
}

export default Wishlist