import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { GiPencilBrush } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const Service = () => {
const skillsData = [
{ percentage: 90,
  language:'HTML' 
},
{ percentage: 85 ,
  language:'CSS' 
},
{ percentage: 75 ,
    language:'JAVASCRIPT'  
},
{ percentage: 85,
    language:'REACT' 
},
];

return (
<div>
    <div className='mx-5  md:mx-10 '>
        <h1 className='text-center mt-5 md:mt-10 text-[51px] font-semibold text-[#FFF]'> <span
                className='text-[#FFB400]'>My</span> Service</h1>
        <p className=' md:text-center font-serif md:text-[18px] my-3'> I frontend developer services for customers of all
            sizes, in creating stylish, modern websites, web services and online stores.</p>
    </div>
    <div className=" md:mt-8 grid grid-cols-1 md:gap-8 md:grid-cols-3 lg:grid-cols-3">

        <ServiceCard logo={<GiPencilBrush />} heading='Web Design'
        text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex 
            ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.'/>
        <ServiceCard logo={<FaCode />} heading='Web Development'
        text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex 
            ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.'/>
        <ServiceCard logo={<FaMobileScreen />} heading='Responsive'
        text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex 
            ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.'/>
    </div>

    <div>
        <div className='text-center'>
            <h1 className='text-center mt-5  text-[30px] font-semibold text-[#FFF] uppercase'> <span
                    className='text-[#FFB400] uppercase '>My</span> skills</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 md:flex justify-center mt-5 md:mt-10 mx-5 md:mx-10 gap-10 md:gap-28'>
            {
            skillsData.map((skill,index)=>(
            <div className='  md:w-[200px]  md:p-2' key={index}>
                <CircularProgressbar value={skill.percentage} text={`${skill.percentage}%`} styles={buildStyles({
                    rotation: 0.25, strokeLinecap: 'butt' , textSize: '16px' , pathTransitionDuration: 0.5, pathColor:
                    `rgba(255, 180, 0, ${skill.percentage / 100})`, textColor: '#f88' , trailColor: '#fff' ,
                    backgroundColor: '#3e98c7' ,})} />
                    <p className='text-center p-4'>{skill.language}</p>
            </div>
            ))
            }
        </div>
    </div>
</div>
);
};

export default Service;
