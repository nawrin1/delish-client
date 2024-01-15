import Image from "next/image";
import image1 from '@/assets/image1.jpg'
const Banner = () => {
    return (
        <div className="relative">
          <div >
            <Image src={image1}  alt="banner image" 
            ></Image>
          </div>
          <div className="absolute top-[50%] left-[10%] ">
            <h2 className="text-[50px] font-bold text-center leading-20 ">"Where Every <span className="text-[#FFBF00]">Recipe</span> <br></br>Tells a Story of <br></br> Taste and Tradition!"</h2>
          </div>

            
        </div>
    );
};

export default Banner;