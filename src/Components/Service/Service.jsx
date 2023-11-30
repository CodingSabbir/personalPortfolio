import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { GiPencilBrush } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
const Service = () => {
    return (
        <div>
            <div className='mx-5  md:mx-10 '> 
                <h1 className='text-center mt-5 md:mt-10 text-[51px] font-semibold text-[#FFF]'> <span className='text-[#FFB400]'>My</span> Service</h1>
                <p className=' md:text-center font-serif md:text-[18px]'> I frontend developer services for customers of all sizes, in creating stylish, modern websites, web services and online stores.</p>
            </div>
            <div className=" md:mt-8 grid grid-cols-1 md:gap-8 md:grid-cols-3 lg:grid-cols-3">
                
            <ServiceCard logo={<GiPencilBrush />} heading='Web Design' text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex 
            ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.'/>
             <ServiceCard logo={<FaCode />} heading='Web Development' text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex 
            ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.'/>
             <ServiceCard logo={<FaMobileScreen />} heading='Responsive' text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex 
            ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.'/>

                </div>
        </div>
    );
};

export default Service;