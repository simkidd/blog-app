import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogsData } from '../data/BlogsData';

const SingleBlog = () => {
  const [blog, setBlog] = useState({})
  const {slug} = useParams()

  useEffect(()=>{
    const blog = BlogsData.find((blog)=> blog.slug == slug);
    setBlog(blog)
  },[slug])

  const {category, title, postedOn, author, image, content} = blog

  return (
    <>
      <div>
        <div className="bg-white">
          <div className='text-center'>
            <span className='block text-[14px] py-3'>{category}</span>
            <h1 className='tracking-[0.5px] capitalize text-[30px] font-[400]'>{title}</h1>
            <span className='text-[15px] italic py-3 text-[#6c6c6c]'>posted on {postedOn} by {author} </span>
          </div>

          <div className='w-full p-3 box-border'>
            <img src={image} alt="" className='max-w-full max-h-full' />
          </div>

          <div className='m-3'>
            <h3 className='font-[500] text-[#333]'>{title}</h3>
            <p className='text-[14px] text-[#333] pb-5 '>{content}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog