import React from 'react'
import Heading from "../common/Heading";
import {about} from "../../../public/json/sale.json";
import SuccessBanner from "./SuccessBanner";
const About = ({className}) => {
  return (
    <div className={`${className}`}>
    <Heading title={about.title} subTitle={about.sunTitle}/>
    <SuccessBanner text={about.text} btnText={about.btnText}/>
    </div>
  )
}

export default About