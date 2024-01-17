// This the banner of the website which is diplayed in homempage

import Image from "next/image";
import image1 from '@/assets/image1.jpg'
const Banner = () => {
    return (
        <div className="relative">
          <div >
            <Image src={image1}  alt="banner image" 
            ></Image>
            
          </div>
          <div className="absolute top-[30%] lg:top-[50%] left-[6%] lg:left[10%]">
            <h2 className="text-xl md:text-[28px] lg:text-[50px] font-bold text-center   leading-10">"Where Every <span className="text-[#FFBF00]">Recipe</span> <br></br>Tells a Story of <br></br> Taste and Tradition!"</h2>
          </div>

            
        </div>
    );
};

export default Banner;