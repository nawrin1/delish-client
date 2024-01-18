// This the banner of the website which is diplayed in homempage

"use client"
import Image from "next/image";
import image1 from '@/assets/image1.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    Aos.init({
        duration:1500
    });
    Aos.refresh();
  }, []);
    return (
        <div className="relative">
          <div >
            <Image src={image1}  alt="banner image" 
            ></Image>
            
          </div>
          <div className="absolute top-[30%] lg:top-[50%] left-[6%] lg:left[10%]">
            <h2 className="text-xl md:text-[28px] lg:text-[50px] font-bold text-center   leading-10" data-aos="fade-up">"Where Every <span className="text-[#FFBF00]" >Recipe</span> <br></br>Tells a Story of <br></br> Taste and Tradition!"</h2>
          </div>

            
        </div>
    );
};

export default Banner;