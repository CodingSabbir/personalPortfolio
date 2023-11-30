import React from 'react';


const ServiceCard = ({heading,text,logo}) => {
return (
<div>
    <section className=" text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-2 md:py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">


        <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-yellow-500/10 hover:shadow-yellow-500/10"
                    href="/services/digital-campaigns">
                    
                   <div className='text-[28px] text-[#FFB400]'>{logo} </div>
                    <h2 className="mt-4 text-xl font-bold text-white">{heading}</h2>
                    <p className="mt-1 text-sm text-gray-300">{text}</p>
                        
                </a>


        </div>
    </section>
</div>
);
};

export default ServiceCard;
