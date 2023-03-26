import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();
  // offset to top of page when open
  useEffect(()=>{
      window.scrollTo(0,0)
  },[location.pathname])

  return (
    <div>Contact</div>
  )
}

export default Contact