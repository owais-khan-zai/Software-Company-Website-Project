import React from "react";
import Header from "../../Header";
import MiniBox from "./aboutComponents/MiniBox";
import about1 from "./aboutAssets/about1.png";
import about2 from "./aboutAssets/about2.png";
import about3 from "./aboutAssets/about3.png";
import ParaBox from "./aboutComponents/ParaBox";
import MiniCard from "./aboutComponents/MiniCard";
import award1 from './aboutAssets/award1.png'
import award2 from './aboutAssets/award2.png'
import award3 from './aboutAssets/award3.png'
import FormPage from "../../components/form/FormPage";
import Footer from "../../components/footer/Footer";
const About = () => {
  return (
    <div className="mx-auto translate-x-[-50%] absolute left-[50%] w-screen  max-w-[1600px] ">
      <Header />

      <div className=" w-full ">
        <div className="w-full px-8 lg:px-20 text-center mt-8">
          <h1 className="text-[1.8rem] leading-none font-semibold">Provider of full-cycle software development services</h1>
          <p className="text-md mt-4">
            To give a high standard of service to our clients, we've established
            a robust team of software engineers, designers, quality assurance
            professionals, and project managers.
          </p>
        </div>
        <div className=" bg-zinc-100 w-full flex px-8 lg:px-20  mt-11 lg:mt-17 flex-col justify-center py-12 items-center lg:py-25">
          <h1 className="text-[1.8rem] leading-none font-semibold text-center">What you can expect from the team freelance</h1>
          <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:gap-10 lg:mt-15 ">
            <MiniBox
              icon={about1}
              head="Streamlined processes"
              para="Employees are more efficient when the workflow is more efficient. Our method ensures high-quality work, automates the software delivery pipeline, and boosts team morale."
            />
            <MiniBox
              icon={about2}
              head="Talented people"
              para="Talented people' para='We seek for outstanding multi-dimensional individuals and invest in them by providing one of the city's most comprehensive career mentorship and training programmes"
            />
            <MiniBox
              icon={about3}
              head="Proven technologies"
              para="Our efforts have yielded software that meets the CISQ code quality criteria. It is safe, easy to maintain, efficient, and dependable. It's simple to expand with trustworthy software."
            />
          </div>
        </div>
        <div className="flex flex-col px-8 gap-6 mt-10 py-8  lg:px-20 lg:flex-row lg:gap-14">
          <ParaBox head='Our Vision' para='To become a global leader in the field of information technology by offering cutting-edge site design, mobile app development, and internet marketing services that will propel our clients businesses forward. We strive to develop brands that shoot high and climb the business to tremendous heights by rewarding our clients trust and happiness. Businesses may quickly decrease their operating costs and uncover genuine company potential thanks to our offshore edge.'/>
          <ParaBox head='Our Mission' para='The Team Freelance is a leading web design and mobile app development firm that works with clients ranging from small businesses to major corporations to create online and mobile-enabled apps. We are known for utilising the strength of our knowledge and talents to create profitable, flourishing, engaging, and simple-to-use applications. We exclusively work with the best iOS, Android, and web app developers, so you can outsource your project and obtain a high-quality result.'/>
        </div>
        {/* Cards Section */}
        <div className="bg-zinc-100 mt-10 py-10 px-8 lg:px-20 flex flex-col gap-8 lg:flex-row lg:items-center ">
          <div className="flex flex-col text-center items-center gap-5 lg:w-[50%] lg:text-start lg:items-start">
            <h2 className="text-[1.7rem] font-semibold leading-9">Creating world-class experiences, forming a vision, and delivering software</h2>
            <p className="text-[0.95rem]">Working with The Team Freelance has had a long-term positive influence on our capacity to innovate and execute quickly. There is a great focus on not simply doing what you ask for by the personnel there.</p>

              <button className='group cursor-pointer relative z-[0]  mt-4 w-fit px-4 py-3 uppercase text-white text-md overflow-hidden before:content-[""] before:absolute before:h-full before:w-[55%] before:top-0 before:left-0 before:bg-[#01345B] before:z-[-1] before:transition-all before:duration-300 hover:before:w-[100%]'>
                <span className="relative z-[2]">let's</span>
                <span className="relative z-10 ml-1 group-hover:text-white text-black transition-colors duration-300">
                  talk
                </span>
            </button>
          </div>
          <div className="flex flex-col gap-4 lg:w-[50%]">
            <MiniCard head='Responsive Design' no='01' para='We develop web pages and websites that are easy to navigate on every screen size, regardless of resolution.'/>
            <MiniCard head='Easy to Customize' no='02' para='Customers may simply tailor their requirements and applications to meet their own needs.'/>
            <MiniCard head='Excellent Performance' no='03' para='A user will be more happy with your website if it runs well.'/>

          </div>
        </div>
        {/* Awards Section */}
        <div className="px-8 lg:px-20 mt-10 lg:flex lg:items-center">
          <div className="flex flex-col gap-7 text-center lg:w-[70%]">
              <h1 className="text-[1.85rem] font-semibold lg:text-[2.5rem] lg:whitespace-nowrap">Awards & Recognition</h1>
            <div className="flex flex-row-reverse justify-center gap-5">          
              <img className="w-18 transform grayscale hover:grayscale-0 hover:scale-150 transition-all duration-400 cursor-pointer" src={award1} alt="Awards Icon"/>
              <img className="w-18 transform grayscale hover:grayscale-0 hover:scale-150 transition-all duration-400 cursor-pointer" src={award2} alt="Awards Icon"/>
              <img className="w-18 transform grayscale hover:grayscale-0 hover:scale-150 transition-all duration-400 cursor-pointer" src={award3} alt="Awards Icon"/>
            </div>
          </div>
          <div className="mt-18 flex flex-col justify-center lg:w-full  gap-10 md:flex-row md:gap-30 lg:gap-12 lg:w-[30%]">
            <div className="flex flex-col gap-15 md:justify-between">
                <div className="flex flex-col items-center ">
                    <h1 className="text-[3.2em] lg:text-[3.2rem] font-semibold">135+</h1>
                    <h6 className="text-lg lg:text-xl">Engineers</h6>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-[3.2rem] lg:text-[3.2rem] font-semibold">1275+</h1>
                    <h6 className="text-lg lg:text-xl text-center">Project Delivered to Clients</h6>
                </div>
            </div>
            <div className="flex flex-col gap-15 md:justify-between items-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-[3.2rem] lg:text-[3.2rem] font-semibold">475+</h1>
                    <h6 className="text-lg lg:text-xl">Customers worldwide</h6>
                </div>
                <div className="bg-black w-fit px-6 py-7 text-center -skew-x-12 hover:skew-x-22 hover:bg-[#01345B] transition-all duration-300 group lg:items-center lg:flex">
                    <h2 className="text-white text-2xl lg:text-[1.8rem] skew-x-12 will-change-transform leading-none group-hover:-skew-x-22 transition-all duration-300">Inspired By Our Vision</h2>
                </div>
            </div>
          </div>
        </div>
        {/* Form Section */}
        <FormPage />
        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default About;
