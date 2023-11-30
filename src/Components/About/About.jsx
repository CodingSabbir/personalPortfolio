import React from 'react';
import './About.css'
import aboutImg from '../img/about-image.jpg'
import { IoMdCloudDownload } from "react-icons/io";

const About = () => {
    return (
      <div className=' mx-5 md:mx-10'>
        <h1 className='text-center mt-5 text-[51px] font-semibold text-[#FFF] mb-16 '>ABOUT <span className='text-[#FFB400]'>ME</span></h1>
          <div className=" about grid md:grid-cols-2  md:mt-8 ">
           <div>
           <img
                src={aboutImg}
                alt="Vintage Car"
                className="rounded-lg "
            />
           </div>
           <div>
            <h1 className='text-[32px] font-serif font-semibold text-[#FFB400] mt-3 md:mt-0'>Sabbir Rahman</h1>
            <h3 className=' text-[14px] md:text-[22px] my-4'>A Lead Frontend Developer  based in Bangladesh</h3>
            <p className='font-mono text-left  '>I  frontend developer services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio</p>
            <div className='md:flex  gap-3 md:gap-7 mt-10'>
            <div className='flex gap-2 md:gap-10'>
                <div className='text-[#FFB400] font-serif'>Birthday<span className='border-r ml-12 md:ml-7'></span></div>
                <div className='font-mono md:font-semibold'>10 November 2002</div>
            </div>
            <div className='flex gap-2 md:gap-10 my-3 md:my-0'>
            <div className='text-[#FFB400] font-serif'>Phone <span className='border-r ml-16 md:ml-5'></span></div>
                <div className='font-mono md:font-semibold'>+001780836579</div>
            </div>
            </div>

            <div className='md:flex gap-3 md:gap-20 md:mt-10 '>
            <div className='flex gap-2 md:gap-10 my-3 md:my-0'>
                <div className='text-[#FFB400] font-serif'>Residence<span className='border-r ml-9 md:ml-5'></span></div>
                <div className='font-mono md:font-semibold'>Bangladesh</div>
            </div>
            <div className='flex gap-2 md:gap-10'>
            <div className='text-[#FFB400] font-serif  '>Age <span className='border-r ml-20 md:ml-10'></span></div>
            <div className='font-mono md:font-semibold '>22 Year</div>
            </div>
            </div>

            <div className='md:flex gap-3 md:gap-10 md:mt-10 '>
            <div className='flex gap-2 md:gap-10 my-3 md:my-0'>
                <div className='text-[#FFB400] font-serif'>Address<span className='border-r ml-12 md:ml-9'></span></div>
                <div className='font-mono md:font-semibold'>Mirpur 10 Dhaka</div>
            </div>
            <div className='flex gap-2 md:gap-10'>
            <div className='text-[#FFB400] font-serif '>E-mail <span className='border-r ml-14 md:ml-4'></span></div>
                <div className='font-mono md:font-semibold text-[14px]'>mdsabbirrahmanm740@gmail.com</div>
            </div>
            </div>
            <a className=" my-4 md:mt-10 group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                href="/download">
                <span
                    className="block rounded-full bg-black px-8 py-3 text-sm font-medium group-hover:bg-transparent flex items-center tracking-widest">
                    Download CV
                    <IoMdCloudDownload  className="ml-2 text-[20px]" />
                </span>
            </a>
           </div>
        </div>
      </div>
    );
};

export default About;
