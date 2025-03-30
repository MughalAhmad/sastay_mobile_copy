import React from 'react'
import Banner from "../common/Banner";
import Button from '../common/button';
const BlogCard = () => {
    let img = ["/svg/common/blog_svg.svg"]

  return (
    <div className='bg-showCaseFilter p-3 md:p-9'>
        <Banner werient="1" images={img} />
        <div className='flex flex-col gap-2 my-4'>
        <span className='text-2xl font-semibold text-simpleColor'>How do I place an order?</span>
        <span className='text-xs font-medium text-zinc700'>by Alchemative on April 23, 2021</span>
        <span className='text-sm font-normal text-simpleColor'>
        Have you heard of the buzz regarding S21 Ultra? People sure are quite inclined towards it, how about we dissect it a little and find out what makes it all so special. Let’s start with the camera which sure is packed with a very interesting feature called the directors view. It provides a thorough experience to capture videos on your phone, you can control...
        </span>
        </div>
        <Button btnText="READ MORE"/>
    </div>
  )
}

export default BlogCard