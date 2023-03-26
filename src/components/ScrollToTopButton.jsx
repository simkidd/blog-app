import React, { useEffect, useState } from 'react';
import {RiArrowUpSLine} from 'react-icons/ri'

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false)

    useEffect(()=>{
        document.addEventListener('scroll', toggleShow);
        return ()=>{
            document.removeEventListener('scroll', toggleShow)
        }
    },[])

    const toggleShow =()=>{
        if(window.pageYOffset > 600){
            setShowButton(true)
        }else{
            setShowButton(false)
        }
    };

    const scrollToTop =()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };


  return (
    <>
        <button className={`bg-[#565673] text-white hover:bg-[#5f9ea0] p-2 opacity-0 duration-200 fixed bottom-3 right-3 ${showButton ? 'opacity-100' : ''}`}
        onClick={scrollToTop}>
            <RiArrowUpSLine size={20} />
        </button>
    </>
  )
}

export default ScrollToTopButton