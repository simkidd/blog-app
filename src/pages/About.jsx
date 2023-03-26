import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  // offset to top of page when open
  useEffect(()=>{
      window.scrollTo(0,0)
  },[location.pathname])

  return (
    <div>About</div>
  )
}

export default About