import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <div >
      <nav className="flex items-center justify-between flex-wrap bg-[#2B2A4C] py-2 px-5 md:px-20 ">
        <a href="#home" className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight font-mono"><span className='text-[30px] text-[#FFB400]'>S</span>ABBIR</span>
        </a>
        <div onClick={toggleMobileMenu} className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-[#FFB400] border-[#FFB400] hover:text-white hover:border-white"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow md:text-end">
            <a   href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-[16px] text-[#FFB400] hover:text-white mr-7">
              Home
            </a>
            <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-[16px] text-[#FFB400] hover:text-white mr-7">
              About
            </a>
            <a href="#service" className="block mt-4 lg:inline-block lg:mt-0 text-[16px] text-[#FFB400] hover:text-white mr-7">
              Service
            </a>
            <a href="#portfolio" className="block mt-4 lg:inline-block lg:mt-0 text-[16px] text-[#FFB400] hover:text-white mr-7">
              Portfolio
            </a>
            <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-[16px] text-[#FFB400] hover:text-white">
              Contact
            </a>
          </div>
         
        </div>
      </nav>
   
    </div>
  );
};

export default Navbar;