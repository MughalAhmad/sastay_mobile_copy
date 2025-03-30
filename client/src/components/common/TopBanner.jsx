import React from 'react'
import {topBanner} from "../../../public/json/common.json"
const TopBanner = ({className}) => {
  return (
    <div className='bg-backgroundTopBanner'>
    <div className={`${className} text-center py-2 text-colorTopBanner dark:text-colorTopBanner font-bold text-xs`}>{topBanner}</div>
    </div>
  )
}

export default TopBanner