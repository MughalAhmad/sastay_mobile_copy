import React from 'react'
import {footerData} from "../../../public/json/common.json";
import { useNavigate } from 'react-router-dom'; 
const footer = ({className}) => {
  const navigate = useNavigate();
  return (
    <div className='bg-zinc900 relative pb-16'>
    <div className={`pb-10 ${className}`}>
        <p className='text-center text-white pt-12 pb-5 text-base font-semibold'>{footerData.heading}</p>
        <div className='flex justify-center'>
                <input className='w-1/2 md:w-[545px] h-10 md:h-12 border-1 border-white outline-none pl-3'/>
                <button className='h-10 md:h-12 bg-primaryColor dark:bg-primaryColor px-8 text-reversSimpleColor dark:text-reversSimpleColor border-1 border-white text-sm font-semibold'>{footerData.btnText}</button>
        </div>


        <div className='flex flex-col px-6 md:flex-row w-full text-white md:px-24 justify-between mt-12 pt-10'>
        <hr className='bg-stone300 absolute w-full left-0 top-56'/>

              <div className='w-full mb-4 md:w-auto flex flex-col'>
                <p className='text-sm font-semibold pb-2'>{footerData.collection.title}</p>
                {footerData.collection.list.map((item, index)=>(<p className='text-xs font-normal cursor-pointer' key={index} onClick={()=>navigate(item.link)}>{item.name}</p>))}
              </div>
              <div className='w-full mb-4 md:w-auto flex flex-col'>
              <p className='text-sm font-semibold pb-2'>{footerData.customerCasre.title}</p>
              {footerData.customerCasre.list.map((item, index)=>(<p className='text-xs font-normal cursor-pointer' key={index} onClick={()=>navigate(item.link)}>{item.name}</p>))}
              </div>
              <div className='w-full mb-4 md:w-auto flex flex-col'>
              <p className='text-sm font-semibold pb-2'>{footerData.policies.title}</p>
              {footerData.policies.list.map((item, index)=>(<p className='text-xs font-normal cursor-pointer' key={index} onClick={()=>navigate(item.link)}>{item.name}</p>))}
              </div>
              <div className='w-full mb-4 md:w-auto flex flex-col'>
              <p className='text-sm font-semibold pb-2'>{footerData.followUs.title}</p>
              {footerData.followUs.list.map((item, index)=>(<div className='flex gap-3 items-start cursor-pointer' key={index} onClick={()=>navigate(item.link)}>{item.icon && <img src={item.icon} alt='none'/>}<p className='text-xs font-normal'>{item.name}</p></div>))}
              </div>
        </div>
         
         <div className='flex justify-center mb-7 px-3 md:px-0'>
        <img src={footerData.bankImg} alt='none'/>
        </div>
        
        <p className='text-white mb-3 px-6 text-sm font-bold'>{footerData.text1}</p>

        <p className='text-white mb-3 px-6 text-sm font-bold'>{footerData.text2}</p>

        <p className='text-white mb-3 px-6 text-sm font-bold'>{footerData.text3}</p>

        <p className='bg-primaryColor absolute w-full left-0 bottom-8 py-2 text-reversSimpleColor dark:text-reversSimpleColor text-center border-t-2 border-white text-sm font-medium'>{footerData.copyRight}</p>
    </div>
    </div>
  )
}

export default footer