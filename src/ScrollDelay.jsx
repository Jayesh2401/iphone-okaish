import React, { useEffect } from 'react';

const ScrollDelay = ({ delayTime, children }) => {
    console.log("called")
  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo(0, scrollTop);
      }, delayTime);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [delayTime]);

  return children;
};

export default ScrollDelay;
