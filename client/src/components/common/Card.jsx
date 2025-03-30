import React from 'react';
import {useNavigate} from "react-router-dom"
const Card = ({img, type="horizantal", btn=false, bg="bg-showCaseFilter"}) => {
  const navigate = useNavigate();
  const handleNavigation = () =>{
    navigate("/product")
  }
  return (
    <>
    {type === "horizantal" && 
    <div className='w-[224px]'>
      <div className={`group ${bg} border-2 border-showCaseFilter dark:border-primaryColor flex justify-center items-center cursor-pointer h-[343px] px-11 relative overflow-hidden`}
      onClick={()=>handleNavigation()}
      >
         <img src={img} alt='none' className=" object-fill min-w-[134px] h-auto"/>
         <span className="absolute top-1.5 -left-5 bg-red-500 text-white text-xs font-bold px-4 py-1 shadow-md rotate-[-45deg]">Sold</span>
         <span className="absolute top-2 -right-7 w-24 bg-green-500 text-white text-xs font-bold py-1 flex justify-center shadow-md rotate-[45deg]">Used</span>

         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex flex-col gap-2 text-[8px] font-bold">
          <button className='w-[143px] py-1 rounded-sm border-2 border-primaryColor bg-white text-black' onClick={(e)=>{ e.stopPropagation(); alert("ADD TO FAVOURITE")}}>ADD TO FAVOURITE</button>
          <button className='w-[143px] py-1 rounded-sm border-2 border-primaryColor bg-primaryColor text-reversSimpleColor' onClick={(e)=>{ e.stopPropagation(); alert("ADD TO CART")}}>ADD TO CART</button>
          <button className='w-[143px] py-1 rounded-sm border-2 border-primaryColor bg-white text-black' onClick={(e)=>{ e.stopPropagation(); alert("SELECT VARIENT")}}>SELECT VARIENT</button>
         </div>

          <button className='absolute bottom-0 left-0 hidden group-hover:block text-[10px] font-bold w-full py-1 rounded-sm border-2 border-primaryColor bg-white text-black text-center'
          onClick={()=>handleNavigation()}
          >VIEW</button>

         </div>
        <div className='flex flex-col py-4 gap-2'>
            <span className='text-center text-xs font-bold text-simpleColor dark:text-simpleColor'>Xiaomi Redmi 14C</span>
            <span className='text-center text-xs font-bold text-simpleColor dark:text-simpleColor'>AED: 29,999 from <span className='text-primaryColor dark:text-primaryColor'>AED: 29,099</span></span>
            <span className='text-center text-xs font-bold text-primaryColor dark:text-primaryColor'>You Save: AED: 900</span>
        </div>
       {btn && <div className='flex justify-center'>
        <span className="py-3 w-32 border-2 border-primaryColor text-simpleColor h-full flex justify-center items-center text-xs font-bold cursor-pointer">Remove</span>
        <span className="py-3 w-32 border-2 border-primaryColor bg-primaryColor text-reversSimpleColor h-full flex justify-center items-center text-xs font-bold cursor-pointer">ADD TO CART</span>
      </div>}
    </div>
    }



    {type === "vertical" &&<div 
    onClick={()=>handleNavigation()}
    className='border-2 border-primaryColor dark:border-primaryColor p-3 flex gap-3 mb-2 cursor-pointer'>
         <img src={img} alt='none' className="w-20 h-20"/>
        <div className='flex flex-col gap-2'>
            <span className='text-xs font-bold text-simpleColor dark:text-simpleColor'>Xiaomi Redmi 14C</span>
            <span className='text-xs font-bold text-simpleColor dark:text-simpleColor'>AED: 29,999 from <span className='text-primaryColor dark:text-primaryColor'>AED: 29,099</span></span>
            <span className='text-xs font-bold text-primaryColor dark:text-primaryColor'>You Save: AED: 900</span>
        </div>
    </div>}
    </>
  )
}

export default Card