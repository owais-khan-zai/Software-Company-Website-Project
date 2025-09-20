import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    let hello = useRef();
    let slide = useRef();
    let text = useRef();
    
    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: slide.current,
                start: "3% top",
                toggleActions: "play reverse play reverse",
            },
        });
        
        tl.to(slide.current, {
            left: '50%',
            x: '-50%',
            duration: 0.5,
        }, 'a')
        
        tl.to(hello.current, {
            right: window.innerWidth < 640 ? '10%' : '-0%',
            duration: 0.5,
        }, 'a')
        
        tl.to(text.current, {
            opacity: 1,
            x: -15,
            duration: 0.5,
        }, 'a')
    }, []);

    return (
        <div className="h-[100vh] w-[100vw] relative overflow-hidden">
            <div 
                className="h-[100vh] w-[100vw] bg-[#FFB600] absolute top-0 flex justify-between items-center p-8 lg:p-18" 
                ref={slide}
                style={{ left: '-50%' }}
            >
                <div className="w-[88%] absolute bottom-10 opacity-0 sm:w-[50%] sm:top-[50%] sm:-translate-y-[50%] lg:flex lg:flex-col lg:w-[40%] lg:justify-center" ref={text}>
                    <div className="mini-head flex items-center gap-1">
                        <svg
                            className="w-[6vw] sm:w-[1.6rem] lg:w-[1.9rem] svg-inline--fa fa-wave-square fa-w-20"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="wave-square"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            data-fa-i2svg=""
                        >
                            <path
                                fill="currentColor"
                                d="M476 480H324a36 36 0 0 1-36-36V96h-96v156a36 36 0 0 1-36 36H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h112V68a36 36 0 0 1 36-36h152a36 36 0 0 1 36 36v348h96V260a36 36 0 0 1 36-36h140a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H512v156a36 36 0 0 1-36 36z"
                            ></path>
                        </svg>
                        <h3 className="text-[6vw] sm:text-[1.6rem] lg:text-[1.9rem] text-white">Since 2018</h3>
                    </div>
                    <div className="head-para">
                        <h1 className="font-semibold tracking-wide text-[7.5vw] sm:text-[2.2rem] sm:leading-10 lg:text-[2.2rem] xl:text-[2.45rem]">
                            The World's Leading Provider of Digital Transformation Solutions
                        </h1>
                        <p className="text-white text-[4.5vw] sm:text-[1.2rem] leading-6 lg:text-[1.2rem] xl:text-[1.4rem] mt-4">
                            We,The Team Freelance, are web, mobile, and enterprise development
                            specialists who design and create solutions to keep your company
                            future-proof in an ever-changing environment.
                        </p>
                    </div>
                </div>
                
                <div className="hello w-[50%] absolute right-[-22%] top-[2%] sm:top-[50%] sm:-translate-y-[50%] sm:flex sm:flex-col sm:w-fit" ref={hello}>
                    <h1 className="text-[27vw] font-bold uppercase leading-none sm:text-[8rem] lg:text-[9.5rem] xl:text-[10.5rem]">he</h1>
                    <div className="h-fit w-fit flex mt-[-15px] gap-2">
                        <h1 className="text-[27vw] font-bold uppercase leading-none sm:text-[8rem] lg:text-[9.5rem] xl:text-[10.5rem]">llo</h1>
                        <div className="w-[5vw] h-[5vw] self-end rounded-full bg-[#FFB600] mb-[5px] sm:w-[2rem] sm:h-[2rem] lg:w-[2.2rem] lg:h-[2.2rem]"></div>
                    </div>
                </div>
                
                <i className="arrow absolute bottom-[10px] right-[10px] text-white text-[3.5vw] sm:text-[1.2rem] md:right-[23px] md:text-[1.4rem] ri-arrow-down-line"></i>
            </div>
        </div>
    );
};

export default Hero;