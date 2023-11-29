import React from 'react';
import bgImg from '../img/bgimg (2).png'
import { FaArrowRight } from "react-icons/fa6";


const Home = () => {
return (
    
<div className=" mx-3 md:mx-5 mt-5 md:mt-10"  data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <div className="grid md:grid-cols-2">
        <div className="text-container mt-8 md:mt-16">
            <h1 className=' text-[30px] md:text-[51px] font-semibold text-[#FFB400]'>- I'M SABBIR RAHMAN</h1>
            <h3 className='text-[28px] md:text-[51px] font-semibold text-[#FFFFFF]'>FRONTEND DEVELOPER</h3>
            <p className='text-[16px] font-mono'>I'm a Bangladesh based front‑end developer focused on crafting clean &
                user‑friendly experiences, I am passionate about building excellent software that improves the lives of
                those around me.</p>


            <a className=" my-4 md:mt-20 group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                href="/download">
                <span
                    className="block rounded-full bg-black px-8 py-3 text-sm font-medium group-hover:bg-transparent flex items-center">
                    MORE ABOUT ME
                    <FaArrowRight className="ml-2" />
                </span>
            </a>

        </div>

        <div className="image-container mr-28 md:mr-0">
            <img className=' md:h-[100vh] ' src={bgImg} alt="" />
        </div>
    </div>
</div>
);
};

export default Home;
