import Banner from '@/components/ui/Banner'
import ingredients from '../../ingredients.json'
import recipe from "../../recipe.json"
import {getRecipe} from '@/utils/getRecipe'
import { MdOutlineRamenDining } from "react-icons/md";
import Link from 'next/link';


const Home=async()=> {
  const data=await getRecipe();
  console.log(data)
  // const res = await fetch(
  //   'https://jsonplaceholder.typicode.com/posts'

  // );
 
 
  // console.log(res.json())
  // console.log(ingredients)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      
      <Banner></Banner>
      <h1 className="text-4xl font-bold text-center text-[#FFBF00] my-4">Recipes  {data.length}</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4  my-10'>

        {
          data.map(item=><div key={item}
            className='h-[300px] w-[300px]   bg-yellow-100  rounded-2xl p-4 shadow-2xl shadow-slate-200 '>
             
              <div className='flex place-content-end'>
              <div className='flex text-4xl rounded-full h-[50px] w-[50px] bg-orange-400  place-content-center place-items-center items-center'>
                <MdOutlineRamenDining></MdOutlineRamenDining>
              </div>
              </div>
              <div className='text-2xl font-semibold items-center justify-center flex mx-auto h-[70%] text-center bg-white rounded-2xl mt-2 '><p className='group'> {item.name }</p></div>
              <div className='flex mx-auto justify-center relative bottom-5  text-white'><Link href={`/meals/${item._id}`}><button className='btn  button btn-outline bg-black btn-sm text-white px-4'>Details</button></Link></div>

          
            
              
          
          </div>)
        }
      </div>
    </main>
  )
}
export default Home;