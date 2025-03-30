import React from 'react'
import Banner from "../common/Banner";
import {mainBanner} from "../../../public/json/sale.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const MainBAnner = ({className}) => {
  return (
    <div className={`${className} relative`}>
        <Banner werient="1" images={mainBanner} />
        <div className='hidden md:flex flex-col gap-5 absolute top-32 md:top-40 lg:top-64 left-7'>
<FontAwesomeIcon className='w-5 md:w-7 h-5 md:h-7 text-zinc700 dark:text-white' icon={faFacebookF} />
      <FontAwesomeIcon onClick={()=>navigate("/wishlist")} className='w-5 md:w-7 h-5 md:h-7 text-zinc700 dark:text-white' icon={faInstagram} />
      <FontAwesomeIcon className='w-5 md:w-7 h-5 md:h-7 text-zinc700 dark:text-white' icon={faTwitter} />
        </div>
    </div>
  )
}

export default MainBAnner