import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className='container mx-auto grid md:grid-cols-[70%_28%] grid-cols-1 gap-[2%] my-5 md:mt-5 mt-[5.5rem] box-border'>
      <Outlet />
      <Sidebar/>
      </div>
      <Footer />
    </>
  )
}

export default Layout