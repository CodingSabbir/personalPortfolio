import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const Skill = () => {
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
        <div data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
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
    );
};

export default Skill;