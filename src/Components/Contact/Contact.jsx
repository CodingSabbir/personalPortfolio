
// import { FiSend } from "react-icons/fi";
// import { FaGithub, FaLinkedin,FaFacebookSquare } from 'react-icons/fa';
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Contact = () => {
//     const showToast = (type) => {
//         if (type === 'success') {
//           toast.success('Email sent successfully!');
//         } else if (type === 'error') {
//           toast.error('Please fill in all required fields.');
//         }
//       };
//     const form = useRef();

//     const sendEmail = (e) => {
//       e.preventDefault();

     
//   const nameInput = form.current.elements.from_name;
//   const emailInput = form.current.elements.from_email;
//   const messageInput = form.current.elements.message;

//   if (!nameInput.value || !emailInput.value || !messageInput.value) {
//     showToast('error');
//     return; 
//   }
  
//       emailjs
//       .sendForm('service_4owep6b', 'template_xe9gtoa', form.current, '3Bj1HwTlI8v-Ny6Uj')
//         .then((result) => {
//             console.log(result.text);
//             showToast('success');
//             form.current.reset();
//         }, (error) => {
//             console.log(error.text);
//             showToast('error');
//         });
//     };
//     return (
//         <div id='contact'>
//             <div>
//             <h1 className='text-center mt-5 text-[51px] font-semibold  uppercase text-[#FFB400]'>contact </h1>
//             </div>
// <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
// 	<div className="grid  grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
// 		<div className="py-6 md:py-0 md:px-6">
// 			<h1 className="text-4xl font-bold">DON'T BE SHY !</h1>
// 			<p className="pt-2 pb-4">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
// 			<div className="space-y-4">
// 				<p className="flex items-center">
// 					<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-[#FFB400]">
// 						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
// 					</svg>
// 					<span>Mirpur 10 Dhaka </span>
// 				</p>
// 				<p className="flex items-center">
// 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-[#FFB400]">
// 						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
// 					</svg>
// 					<span>+8801780836579</span>
// 				</p>
// 				<p className="flex items-center">
// 					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-[#FFB400]">
// 						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
// 						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
// 					</svg>
// 					<span>mdsabbirrahmanm740@gmail.com</span>
// 				</p>
// 			</div>
//             <div className=' mt-3 md:mt-12 flex gap-5'>
//   <div>
//     <a className='pointer' href="https://github.com/CodingSabbir">
//       <span className='inline-block text-[#FFB400] text-[30px]'><FaGithub /></span>
//     </a>
//   </div>
//   <div>
//     <a className='pointer' href="https://www.linkedin.com/in/sabbir-hossain-813103285?fbclid=IwAR1Q9rCqcxidkBy_CJJ2WDNoeXMHDQyCXZ1lkwFYIiUm_kSsrNrqhXsJ2fE">
//       <span className='inline-block text-[#FFB400] text-[30px]'><FaLinkedin /></span>
//     </a>
//   </div>
//   <div>
//     <a className='pointer' href="https://www.facebook.com/profile.php?id=100026370828797&mibextid=ZbWKwL">
//       <span className='inline-block text-[#FFB400] text-[30px]'><FaFacebookSquare /></span>
//     </a>
//   </div>
// </div>
// 		</div>
        
// 		<form 
//         ref={form}
//         onSubmit={sendEmail}
//         novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
// 			<label className="block">
// 				<span className="mb-1">Full name</span>
// 				<input type="text" name="from_name" placeholder="NAME" className="  text-black p-2 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" />
// 			</label>
// 			<label className="block">
// 				<span className="mb-1">Email address</span>
// 				<input type="email" name="from_email" placeholder="E-mail" className="text-black p-2 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" />
// 			</label>
// 			<label className="block">
// 				<span className="mb-1">Message</span>
// 				<textarea name="message" rows="3" className=" p-2 text-black block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"></textarea>
// 			</label>
//             <div>
//             <button onClick={showToast} type="submit" className="self-center px-6 py-1 text-lg rounded border-2 border-[#FFB400]">Submit <span className='inline-block text-[#FFB400]'><FiSend /></span> </button>
//             <ToastContainer/>
//             </div>
// 		</form>
// 	</div>
// </section>
  
//         </div>
//     );
// };

// export default Contact;




import { FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const showToast = (type) => {
    if (type === 'success') {
      toast.success('Email sent successfully!');
    } else if (type === 'error') {
      toast.error('Please fill in all required fields.');
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const nameInput = form.current.elements.from_name;
    const emailInput = form.current.elements.from_email;
    const messageInput = form.current.elements.message;

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      showToast('error');
      return;
    }

    emailjs
      .sendForm('service_4owep6b', 'template_xe9gtoa', form.current, '3Bj1HwTlI8v-Ny6Uj')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        showToast('success');
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        showToast('error');
      });
  };

  return (
    <div id="contact">
      <div>
        <h1 className="text-center mt-5 text-[51px] font-semibold uppercase text-[#FFB400]">contact </h1>
      </div>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="grid  grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">DON'T BE SHY !</h1>
            <p className="pt-2 pb-4">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-4">
				<p className="flex items-center">
					<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-[#FFB400]">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Mirpur 10 Dhaka </span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-[#FFB400]">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+8801780836579</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-[#FFB400]">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>mdsabbirrahmanm740@gmail.com</span>
				</p>
			</div>
            <div className=' mt-3 md:mt-12 flex gap-5'>
  <div>
    <a className='pointer' href="https://github.com/CodingSabbir">
      <span className='inline-block text-[#FFB400] text-[30px]'><FaGithub /></span>
    </a>
  </div>
  <div>
    <a className='pointer' href="https://www.linkedin.com/in/sabbir-hossain-813103285?fbclid=IwAR1Q9rCqcxidkBy_CJJ2WDNoeXMHDQyCXZ1lkwFYIiUm_kSsrNrqhXsJ2fE">
      <span className='inline-block text-[#FFB400] text-[30px]'><FaLinkedin /></span>
    </a>
  </div>
  <div>
    <a className='pointer' href="https://www.facebook.com/profile.php?id=100026370828797&mibextid=ZbWKwL">
      <span className='inline-block text-[#FFB400] text-[30px]'><FaFacebookSquare /></span>
    </a>
  </div>
</div>
          </div>
          <form ref={form} onSubmit={sendEmail} noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                name="from_name"
                placeholder="NAME"
                className="text-black p-2 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                name="from_email"
                placeholder="E-mail"
                className="text-black p-2 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                name="message"
                rows="3"
                className=" p-2 text-black block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"
              ></textarea>
            </label>
            <div>
              <button type="submit" className="self-center px-6 py-1 text-lg rounded border-2 border-[#FFB400]">
                Submit <span className="inline-block text-[#FFB400]"><FiSend /></span>
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
