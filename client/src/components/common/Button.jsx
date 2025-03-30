import React from 'react'

const button = ({btnText}) => {
  return (
    <button className='px-10 py-3.5 bg-primaryColor dark:bg-primaryColor text-xs font-semibold text-reversSimpleColor dark:text-reversSimpleColor'>{btnText}</button>
  )
}

export default button