import React from 'react'
import Heading from "../common/Heading";
import Carousel from '../common/Carousel';
import {newArrival} from "../../../public/json/sale.json";

const NewArrival = ({className}) => {
  return (
    <div className={`${className}`}>
    <Heading title={newArrival.title} subTitle={newArrival.sunTitle}/>
    <Carousel slides={newArrival.list} />
</div>
  )
}

export default NewArrival