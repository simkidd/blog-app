import React from "react";
import { NavLink } from "react-router-dom";
import { BlogsData } from "../data/BlogsData";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        {/* about card */}
        <div className="bg-white box-border p-5">
          <div className="uppercase text-[15px] text-center text-[#333] tracking-[2px] box-border">
            <span>About Us</span>
          </div>
          <div className="w-full box-border">
            <img src="" alt="" />
          </div>
          <div>
            <p className="text-[14px] text-[#565673] font-[300]">
              My name is John Mason, I am a frontend developer, aspiring to
              specialize in full stack development.
            </p>
          </div>
        </div>

        {/* social network card */}
        <div className="bg-white box-border p-5">
          <div className="uppercase text-[15px] text-center text-[#333] tracking-[2px] box-border">
            <span>Social Network</span>
          </div>
        </div>
        {/* recent posts card */}
        <div className="bg-white box-border p-5">
          <div className="uppercase text-[15px] text-center text-[#333] tracking-[2px] box-border">
            <span>Recent Posts</span>
          </div>
          <div className="py-5 flex flex-col gap-[10px]">
            {BlogsData.map((blog, i) => {
              return (
                <NavLink to={`blogs/${blog.slug}`} key={i}>
                  <div className="border-b border-b-[#eee]">
                    <h3 className="text-[14px] text-[#6c6c6c] tracking-[1px] font-[500]">
                      {blog.title}
                    </h3>
                    <span className="text-[10px] font-[400] text-[#6c6c6c]">
                      {blog.postedOn}
                    </span>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
