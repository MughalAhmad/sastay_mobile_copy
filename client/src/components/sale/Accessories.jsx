import React, {useState} from 'react'
import Heading from "../common/Heading";
import Carousel from '../common/Carousel';
import {accessories} from "../../../public/json/sale.json";
const Accessories = ({className}) => {
  const [optionId, setOptionId] = useState(0);
  return (
    <div className={`${className}`}>
    <Heading title={accessories.title} subTitle={accessories.sunTitle}/>
    <div className='flex justify-center mb-40 md:mb-0'>
      <div className='w-[512px] h-[47px] flex flex-col md:flex-row'>
        {accessories.options.map((option, index)=>(
        <span key={index} onClick={()=>setOptionId(index)} 
        className={`py-4 px-10 border-2 h-full flex justify-center items-center text-sm font-bold cursor-pointer ${
          optionId === index ? "bg-primaryColor text-reversSimpleColor" : "text-simpleColor"
        }`}
        >{option}</span>
        ))}
      </div>
    </div>
    <Carousel slides={accessories.list}/>
</div>
  )
}

export default Accessories