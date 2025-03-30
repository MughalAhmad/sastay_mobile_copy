import React from 'react'
import Heading from "../../components/common/Heading";
import Banner from "../../components/common/Banner";

const AboutUs = () => {
  let img = ["/svg/common/about_us_svg.svg"]
  return (
    <div className='space_betweeen'>
    <p className='text-xs font-medium my-7 text-simpleColor dark:text-simpleColor'><span className='text-primaryColor dark:text-primaryColor'>Home</span>&nbsp;/&nbsp;ABOUT US</p>
    <Heading title="ABOUT US" subTitle="All Your Wishes in One Place"/>
    <Banner werient="1" images={img} />
    <p className='bg-showCaseFilter py-6 px-3 md:px-8 text-base md:text-xl font-medium text-simpleColor leading-10 break-words mb-5'>
    Welcome to <span className='text-primaryColor'>[Your Business Name]</span>, your ultimate destination for the latest mobile phones and accessories. We are passionate about connecting people with cutting-edge technology to enhance their digital lifestyle. At <span className='text-primaryColor'>[Your Business Name]</span>, we pride ourselves on offering a wide selection of smartphones, tablets, and gadgets from trusted brands at competitive prices. Our customer-focused approach ensures a seamless shopping experience, with dedicated support to help you find the perfect device to match your needs. Whether you’re upgrading to the newest model or searching for a reliable and affordable option, we are here to provide quality products and excellent service. Shop with confidence at <span className='text-primaryColor'>[Your Business Name]</span>, where innovation meets convenience, and let us help you stay connected to what matters most.
    </p>

    </div>
  )
}

export default AboutUs