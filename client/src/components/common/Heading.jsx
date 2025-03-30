import React from 'react'

const Heading = ({title="text", subTitle="subText"}) => {
  return (
    <div className='flex flex-col items-center gap-2'>
        <div className='flex justify-center items-center gap-3.5'>
            <hr className='w-12 h-1 bg-dash dark:bg-dash'/>
            <span className='w-3 h-3 rounded-full bg-primaryColor dark:bg-primaryColor'>.</span>
            <span className='text-base md:text-2xl font-semibold text-primaryColor dark:text-primaryColor text-center'>{title}</span>
            <span className='w-3 h-3 rounded-full bg-primaryColor dark:bg-primaryColor'>.</span>
            <hr className='w-12 h-1 bg-dash dark:bg-dash text-4xl'/>
        </div>
        <p className='text-xl md:text-4xl font-bold text-simpleColor dark:text-simpleColor text-center'>{subTitle}</p>
    </div>
  )
}

export default Heading