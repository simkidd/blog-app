import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/vite.svg";
import { BsFacebook, BsSearch, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import {AiFillInstagram} from 'react-icons/ai'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [nav, setNav] = useState(false);

  const OpenSearch = () => {
    setSearch(!search);
  };

  const OpenMenu = () => {
    setNav(!nav);
  };

  const submitSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto w-full flex justify-between items-center md:px-0 px-4 relative">
          {/* logo */}
          <div className="flex items-center justify-center mr-4 py-4">
            <img src={Logo} alt="logo" />
          </div>
          {/* navbar */}
          <nav className="hidden md:flex items-center justify-between w-full py-4">
            <ul className="flex items-center gap-3">
              <li>
                <Link
                  to="/"
                  className="font-[400] text-[#565673] hover:text-[#5f9ea0]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="blogs"
                  className="font-[400] text-[#565673] hover:text-[#5f9ea0]"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  className="font-[400] text-[#565673] hover:text-[#5f9ea0]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="font-[400] text-[#565673] hover:text-[#5f9ea0]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* search bar */}
            <div>
              <form
                onSubmit={submitSearch}
                className="flex w-full items-center"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className={
                    search
                      ? "w-[200px] p-[5px] text-[14px] focus:!outline-none duration-300"
                      : "w-0 p-[5px] text-[14px] duration-300"
                  }
                />
                <BsSearch
                  onClick={OpenSearch}
                  className="text-[#565673] cursor-pointer ml-2"
                />
              </form>
            </div>
          </nav>
          {/* mobile nav menu */}
          <nav className={nav ? "flex items-center flex-col " : "hidden"}>
            <ul className="flex items-center flex-col gap-3 absolute">
              <li>
                <Link
                  to="/"
                  className="font-[400] text-[#565673] hover:text-[#5f9ea0]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="blogs"
                  className="font-[400] text-[#565673] hover:text-[#5f9ea0]"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  className="font-[400] text-[#565673] hover:text-[#5f9ea0]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="font-[400] text-[#565673] hover:text-[#5f9ea0]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* social links */}
          <div className="flex items-center gap-4">
            <Link className="hover:text-[#5f9ea0] text-white text-[14px]"><BsFacebook/></Link>
            <Link className="hover:text-[#5f9ea0] text-white text-[14px]"><BsTwitter/></Link>
            <Link className="hover:text-[#5f9ea0] text-white text-[14px]"><AiFillInstagram/></Link>
            <Link className="hover:text-[#5f9ea0] text-white text-[14px]"><BsLinkedin/></Link>
            <Link className="hover:text-[#5f9ea0] text-white text-[14px]"><BsGithub/></Link>
          </div>
          </nav>
          {/* menu icon */}
          <div onClick={OpenMenu} className="cursor-pointer md:hidden flex">
            {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
