import React from 'react'
import Button from '../common/button'
const successBanner = ({text, btnText}) => {
  return (
    <div className='bg-aboutSale dark:bg-aboutSale p-4 md:p-7'> 
    <div className='border-2 border-primaryColor dark:border-primaryColor pt-9 px-3 md:px-5 pb-10 flex flex-col items-center gap-4'>
        <p className='text-justify md:text-center text-simpleColor dark:text-simpleColor'>{text}</p>
        <Button btnText={btnText}/>
    </div>
    </div>
  )
}

export default successBanner