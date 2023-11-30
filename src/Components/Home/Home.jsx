import React from 'react';
import bgImg from '../img/bgimg (2).png'



const Home = () => {
 
return (
    
<div className=" mx-5 md:mx-10 mt-5 md:mt-10"  data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
       
    <div className="grid md:grid-cols-2">
        <div className="text-container mt-8 md:mt-16">
            <h1 className=' text-[30px] md:text-[51px] font-semibold text-[#FFB400]'>- I'M SABBIR RAHMAN</h1>
            <h3 className='text-[26px] md:text-[51px] font-semibold text-[#FFFFFF]'>FRONTEND DEVELOPER</h3>
            <p className='text-[16px] font-mono'>I'm a Bangladesh based front‑end developer focused on crafting clean &
                user‑friendly experiences, I am passionate about building excellent software that improves the lives of
                those around me.</p>



        </div>

        <div className="image-container ml-0 md:ml-20 mr-28 md:mr-0">
            <img className='  md:h-[400px] ' src={bgImg} alt="" />
        </div>
    </div>
</div>
);
};

export default Home;
