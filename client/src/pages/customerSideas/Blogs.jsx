import React from 'react'
import Heading from "../../components/common/Heading";
import BlogCard from '../../components/blogs/BlogCard';
const Blogs = () => {
  return (
    <div className='space_betweeen mb-5'>
        <p className='text-xs font-medium my-7 text-simpleColor dark:text-simpleColor'><span className='text-primaryColor dark:text-primaryColor'>Home</span>&nbsp;/&nbsp;Blogs</p>
        <Heading title="BLOGS" subTitle="All Your Wishes in One Place"/>
        <BlogCard/>
        <BlogCard/>

    </div>
  )
}

export default Blogs