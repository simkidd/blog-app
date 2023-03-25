import React from "react";
import { Link } from "react-router-dom";
import {BsFacebook, BsTwitter, BsLinkedin, BsGithub} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';

const Header = () => {
  return (
    <>
      <header className="w-full md:flex hidden">
        <div className="container mx-auto flex items-center justify-between py-2">
        {/* header nav */}
          <nav className="flex items-center justify-between gap-8">
                <Link to="/" className="uppercase text-[12px] text-white hover:text-[#5f9ea0]">Home</Link>
                <Link to="about" className="uppercase text-[12px] text-white hover:text-[#5f9ea0]">About</Link>
                <Link to="contact" className="uppercase text-[12px] text-white hover:text-[#5f9ea0]">Contact Us</Link>
          </nav>
          {/* social links */}
          <div className="flex items-center gap-4">
            <Link className="hover:text-[#5f9ea0] text-white text-[14px]"><BsFacebook/></Link>
            <Link className="hover:text-[#5f9ea0] text-white text-[14px]"><BsTwitter/></Link>
            <Link className="hover:text-[#5f9ea0] text-white text-[14px]"><AiFillInstagram/></Link>
            <Link className="hover:text-[#5f9ea0] text-white text-[14px]"><BsLinkedin/></Link>
            <Link className="hover:text-[#5f9ea0] text-white text-[14px]"><BsGithub/></Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
