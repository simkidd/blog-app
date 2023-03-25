import React from "react";
import { Link } from "react-router-dom";

const RecentPosts = (props) => {
  const { BlogsData } = props;

  return (
    <>
      <div className="bg-white p-5">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {BlogsData.map((blog, i) => {
            return (
              <div key={i} className="flex flex-col box-border">
                <div className="w-full h-[250px] box-border">
                  <img
                    src={blog.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>

                <div className="flex flex-col py-2">
                  <span className="text-[14px] tracking-[1px]">Featured</span>
                  <h2 className="text-[16px]">{blog.title}</h2>
                  <span className='text-[14px] italic py-2 text-[#6c6c6c]'>
                    Posted on {blog.postedOn} by {blog.author}
                  </span>
                  <p className="text-[14px] text-[#333] pb-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Commodi iure quas error vel? Minus, quaerat perspiciatis.
                    Harum perferendis minima voluptatem provident, soluta illo.
                    Necessitatibus, velit! In qui deserunt quod fugiat.
                  </p>
                  <Link to={`blogs/${blog.slug}`} className='w-fit'>
                    <button className="hover:!underline text=[1px]">Read more</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecentPosts;
