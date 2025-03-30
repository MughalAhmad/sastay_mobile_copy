import Button from '../common/Button';
import React from 'react'
const ProductData = () => {

  return (
    <div>
      <p className='text-xs font-medium my-7 text-simpleColor dark:text-simpleColor'><span className='text-primaryColor dark:text-primaryColor'>Home</span>&nbsp;/&nbsp;<span className='text-primaryColor dark:text-primaryColor'>Smart Phones&nbsp;</span>/&nbsp;XIAOMI REDMI 14C</p>
      <div className='flex flex-col md:flex-row bg-showCaseFilter dark:bg-showCaseFilter px-9 py-7 justify-center items-start md:gap-6 lg:gap-12'>
        <div className='flex flex-col-reverse md:flex-row gap-10'>
        <div className='flex md:flex-col gap-2 flex-wrap justify-center md:justify-start'>
        <div className='border w-20 h-24 flex justify-center items-center'>
        <img src='/svg/common/mobile_svg.svg' className='h-20 w-auto' alt='none'/>
        </div>
        <div className='border w-20 h-24 flex justify-center items-center'>
        <img src='/svg/common/mobile_svg.svg' className='h-20 w-auto' alt='none'/>
        </div>
        <div className='border w-20 h-24 flex justify-center items-center'>
        <img src='/svg/common/mobile_svg.svg' className='h-20 w-auto' alt='none'/>
        </div>
        <div className='border w-20 h-24 flex justify-center items-center'>
        <img src='/svg/common/mobile_svg.svg' className='h-20 w-auto' alt='none'/>
        </div>
        </div>
        <div className='flex flex-col justify-center gap-4'>
        <div className='flex flex-col m-auto md:items-center justify-center w-full border h-72 md:h-[450px] md:w-[300px]'>
          <img src='/svg/common/mobile_svg.svg' className='h-[300px] w-auto transition-all duration-300 md:hover:h-[400px] hover:cursor-zoom-in' alt='none'/>
        </div>
          <span className='text-sm font-normal text-simpleColor dark:text-simpleColor text-left md:text-center w-full'>Roll over image to zoom in</span>
        </div>
        </div>
        <div className='flex flex-col w-full md:flex-1 justify-center items-start'>
          <span className='text-xl md:text-3xl font-bold text-simpleColor dark:text-simpleColor'>Xiaomi Redmi 14c</span>
          <span className='text-xs font-bold text-simpleColor dark:text-simpleColor pt-1'>Brand:<span className='text-primaryColor dark:text-primaryColor'>&nbsp;XIAOMI</span></span>

          <span className='text-primaryColor dark:text-primaryColor text-xl md:text-3xl font-bold border-t-2 border-neutral500 pt-7 mt-7 w-[95%]'>AED 29,000</span>
          <span className='text-xs font-bold text-simpleColor dark:text-simpleColor border-b-2 border-neutral500 pb-7 pt-1 mb-7 w-[95%]'>Status:<span className='text-primaryColor dark:text-primaryColor'>&nbsp;Stock</span></span>

          <span  className='text-xs font-bold text-simpleColor dark:text-simpleColor'>SKU:<span className='text-zinc700 dark:text-neutral300 font-normal'>&nbsp;27631</span></span>
          <span  className='text-xs font-bold text-simpleColor dark:text-simpleColor pt-1'>Category:<span className='text-zinc700 dark:text-neutral300 font-normal'>&nbsp;27631</span></span>
          <span  className='text-xs font-bold text-simpleColor dark:text-simpleColor pt-1'>Tag:<span className='text-zinc700 dark:text-neutral300 font-normal'>&nbsp;Xiaomi</span></span>
           

          <div className='flex pt-3 gap-3 mb-10 flex-wrap'>
           <img src='/svg/product/fb.svg' alt='none'/>
           <img src='/svg/product/tw.svg' alt='none'/>
           <img src='/svg/product/gm.svg' alt='none'/>
           <img src='/svg/product/wt.svg' alt='none'/>
           <img src='/svg/product/lk.svg' alt='none'/>
          </div>

          <Button btnText="ADD TO CART"/>

        </div>

      </div>
    </div>
  )
}

export default ProductData