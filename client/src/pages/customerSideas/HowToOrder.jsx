import React from 'react'
import Heading from "../../components/common/Heading";

const HowToOrder = () => {
  return (
    <div className='space_betweeen'>
     <p className='text-xs font-medium my-7 text-simpleColor dark:text-simpleColor'><span className='text-primaryColor dark:text-primaryColor'>Home</span>&nbsp;/&nbsp;How To Order</p>
     <Heading title="HOW TO ORDER" subTitle="All Your Wishes in One Place"/>
     <div className='bg-showCaseFilter py-6 px-8 text-simpleColor mb-5'>
     <p className='text-sm font-bold'>
     Placing an order is simple through these steps:
    </p>
    <ul className='text-xs font-normal'>
        <li>Add products in your shopping cart</li>
        <li>Proceed to checkout</li>
        <li>Provide contact details, delivery address, schedule of delivery and payment method.</li>
    </ul>
    </div>
    </div>
  )
}

export default HowToOrder