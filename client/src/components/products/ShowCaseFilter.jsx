import React from 'react'

const ShowCaseFilter = () => {
  return (
    <div className='p-7 flex flex-col'>
        <span className='text-xs font-normal text-simpleColor dark:text-simpleColor'>Show Filter / Hide Filter</span>
        <span className='text-base font-semibold text-primaryColor dark:text-primaryColor mb-4 mt-3'>Shop By Brand</span>
        <div className='flex flex-col gap-3'>
        <div className='text-xs font-bold gap-3 flex items-center'><input type='checkbox'/><span className='text-simpleColor dark:text-simpleColor'>Samsung</span></div>
        <div className='text-xs font-bold gap-3 flex items-center'><input type='checkbox'/><span className='text-simpleColor dark:text-simpleColor'>Tecno</span></div>
        <div className='text-xs font-bold gap-3 flex items-center'><input type='checkbox'/><span className='text-simpleColor dark:text-simpleColor'>Xiaomi</span></div>
        </div>

        <span className='text-base font-semibold text-primaryColor dark:text-primaryColor mb-4 mt-10'>Shop By Price</span>
        <div className='flex flex-col gap-3'>
        <div className='text-xs font-bold gap-3 flex items-center'><input type='checkbox'/><span className='text-simpleColor dark:text-simpleColor'>AED 0 - AED 10000</span></div>
        <div className='text-xs font-bold gap-3 flex items-center'><input type='checkbox'/><span className='text-simpleColor dark:text-simpleColor'>AED 0 - AED 10000</span></div>
        <div className='text-xs font-bold gap-3 flex items-center'><input type='checkbox'/><span className='text-simpleColor dark:text-simpleColor'>AED 0 - AED 10000</span></div>
        <div className='text-xs font-bold gap-3 flex items-center'><input type='checkbox'/><span className='text-simpleColor dark:text-simpleColor'>AED 0 - AED 10000</span></div>

        </div>

        <span className='text-base font-semibold text-primaryColor dark:text-primaryColor mb-4 mt-10'>Color</span>
        <div className='flex flex-wrap gap-2'>
        <span className='w-6 h-6 border'></span>
        <span className='w-6 h-6 border'></span>
        <span className='w-6 h-6 border'></span>
        <span className='w-6 h-6 border'></span>
        <span className='w-6 h-6 border'></span>

        </div>
    </div>
  )
}

export default ShowCaseFilter