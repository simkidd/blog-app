import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "/vite.svg";
import {
  BsFacebook,
  BsSearch,
  BsTwitter,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
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
    OpenMenu()
  };

  return (
    <>
      <div className="bg-white md:relative fixed top-0 left-0 w-full">
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
          <nav
            className={
              nav
                ? "flex items-center flex-col absolute py-8 top-0 left-0 h-screen bg-white w-full duration-300 gap-4"
                : "left-[-150%] flex items-center flex-col absolute py-8 top-0 h-screen bg-white w-full duration-300 gap-4"
            }
          >
            {/* search bar */}
            <div className="w-full flex items-center mt-10 px-12 py-2">
              <form
                onSubmit={submitSearch}
                className="flex w-full items-center justify-between"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className={
                    search
                      ? "w-full p-[5px] text-[14px] border-b  focus:!outline-none duration-300"
                      : "w-0 p-[5px] text-[14px] duration-300"
                  }
                />
                <BsSearch
                  onClick={OpenSearch}
                  className="text-[#565673] h-full cursor-pointer my-1 ml-2"
                />
              </form>
            </div>
            <ul className="flex items-center flex-col gap-3 w-full h-[60%] pt-4 ">
              <li className="w-full flex items-center justify-center">
                <NavLink
                  onClick={OpenMenu}
                  to="/"
                  className="py-4 w-full text-center font-[400] text-[#565673] hover:text-[#5f9ea0]"
                >
                  Home
                </NavLink>
              </li>
              <li className="w-full flex items-center justify-center">
                <NavLink
                  onClick={OpenMenu}
                  to="blogs"
                  className="py-4 w-full text-center font-[400] text-[#565673] hover:text-[#5f9ea0]"
                >
                  Blogs
                </NavLink>
              </li>
              <li className="w-full flex items-center justify-center">
                <NavLink
                  onClick={OpenMenu}
                  to="about"
                  className="py-4 w-full text-center font-[400] text-[#565673] hover:text-[#5f9ea0]"
                >
                  About
                </NavLink>
              </li>
              <li className="w-full flex items-center justify-center">
                <NavLink
                  onClick={OpenMenu}
                  to="contact"
                  className="py-4 w-full text-center font-[400] text-[#565673] hover:text-[#5f9ea0]"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* social links */}
            <div className="flex items-center gap-8 py-4">
              <Link className="hover:text-[#5f9ea0] text-[#565673] text-[14px]">
                <BsFacebook size={18} />
              </Link>
              <Link className="hover:text-[#5f9ea0] text-[#565673] text-[14px]">
                <BsTwitter size={18} />
              </Link>
              <Link className="hover:text-[#5f9ea0] text-[#565673] text-[14px]">
                <AiFillInstagram size={18} />
              </Link>
              <Link className="hover:text-[#5f9ea0] text-[#565673] text-[14px]">
                <BsLinkedin size={18} />
              </Link>
              <Link className="hover:text-[#5f9ea0] text-[#565673] text-[14px]">
                <BsGithub size={18} />
              </Link>
            </div>
          </nav>
          {/* menu icon */}
          <div
            onClick={OpenMenu}
            className="cursor-pointer z-10 md:hidden flex pl-4"
          >
            {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
