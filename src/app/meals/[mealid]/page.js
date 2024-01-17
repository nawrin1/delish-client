//meal details page

import Delete from "@/components/ui/Delete";
import Edit from "@/components/ui/Edit";
import { getMeal } from "@/utils/getMeal";
import Image from "next/image";
import Link from "next/link";


const MealDetail= async({params}) => {
    console.log(params.mealid)
    const mealId=params.mealid
    const data=await getMeal(mealId) //fetching meal details

     
    return (
        <div className=" bg-white mb-20">
          
            <div className="relative max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  px-4 flex justify-between mx-auto py-10">
                <div>
                <Image src={data[0].image} width={600} alt="mealimage" height={500}/>
                </div>
                <div className="bg-white  w-[400px] md:h-[50px] lg:h-[120px] absolute md:left-[40%] lg:left-[50%] top-[20%] flex items-center justify-center lg:justify-start md:justify-start px-4 mx-auto">
                    <h2 className="font-extrabold text-xl lg:text-2xl md:text-2xl ">{data[0].name}</h2>
                </div>

            </div>
            <div className=" mt-8 flex flex-col lg:flex-row md:flex-col justify-center max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg px-4 mx-auto">
                    <div className="lg:w-[40%] ">
                        <h2 className="font-bold text-2xl mb-3">Ingredients:</h2>
                        <ul style={{listStyle:"disc"}} className="pl-3">
                            {
                                data[0].ingredients.map(item=><li key={item}>{item}</li>)
                            }
                        </ul>
                        
                    </div>
                    <div className="lg:w-[60%]">
                    <h2 className="font-bold text-2xl mb-3">Instructions:</h2>
                        <p className="text-slate-600 text-justify">{data[0].instruction}</p>
                   </div>
                    <div className="flex gap-2 mt-2 md:mt-2">
                        <Link href={`/editMeal/${data[0]._id}`}><Edit></Edit></Link>
                        <Delete id={data[0]._id}></Delete>
                    </div>
                   
                </div>
         
        </div>
    );
};

export default MealDetail;