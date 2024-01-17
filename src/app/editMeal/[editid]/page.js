
//this page is for editing data

"use client"


import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Watch } from "react-loader-spinner";
import Swal from "sweetalert2";
import { getMeal } from "@/utils/getMeal";
import useSWR, { mutate } from "swr";

const EditMeal = ({params}) => {
    console.log(params.editid)
    const [data, setData] = useState(null);
    const router=useRouter()

    //for getting individual meals
    useEffect(()=>{
        const fetchDataAsync = async () => {
            const result = await getMeal(params.editid);
            setData(result);
          };
      
          fetchDataAsync();
    

    },[params.editid])

    const { register, handleSubmit, reset, formState: { errors },setError,control } = useForm();

    if (!data){
        return (
            <div className='flex justify-center items-center min-h-screen place-content-center mx-auto place-items-center '><Watch
            height="80"
            width="80"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          /></div>)
        
    }

    const onSubmit=async (datas)=>{
        const ingredients=datas.ingredients.split(',')
        const recipe={name:datas.title, image:datas.image,ingredients:ingredients,instruction:datas.instruction}

        //updating data

        fetch(`http://localhost:4000/allRecipes?recipeId=${data[0]._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe),
        })
            .then(res => res.json()) 
            .then(data => {
                if (data.modifiedCount > 0) {

                    // sweet alert after updating
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Updated`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    location.reload() //for reloading the page
                }
            })
            .catch(error => console.log(error));
        

       

    }
    return (
        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto  px-4">
            <h2 className="text-center text-4xl my-6 font-bold">Edit Recipe</h2>

            <div className="flex mx-auto  items-center justify-center">
    
                <div className=" bg-white w-[400px] lg:w-[600px] rounded-2xl p-4 shadow-2xl shadow-slate-400">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control  ">
                                    <div> 
                                    {/* input field for title */}
                                <TextField
                                    id="outlined-search1"
                                    label="Title"
                                    type="text"
                                    {...register("title", { required: true })}
                                    name="title"
                                    placeholder="Edit title.."
                                    defaultValue={data[0].name}
                                    InputProps={{
                                        style: {
                                        color: 'black',
                                        borderBottom: "1px solid black",
                                        },

                                    }}
                                    style={{ fontFamily: 'serif', width: '100%' }}
                                    variant="standard"  
                                    />
                                    </div>
                        </div>
                        <div className="form-control  ">
                                    <div>
                                    {/* input field for image */}
                                    <TextField
                                    id="outlined-search2"
                                    label="Image"
                                    type="text"
                                    placeholder="Edit your image.."

                                    {...register("image")}     
                                    name="image"
                                    InputProps={{
                                        style: {
                                        color: 'black',
                                        borderBottom: "1px solid black",
                                        }
                                    
                                    }}
                                    defaultValue={data[0].image}
                                    style={{ fontFamily: 'serif', width: '100%' }}
                                    variant="standard"
                                    />

                                    </div>
                        </div>
                        <div className="form-control  ">
                                <div>
                                    {/* input field for instruction */}
                                    <TextField
                                    id="outlined-search2"
                                    label="Instruction"
                                    type="text"
                                    placeholder="Edit Instruction.."
                                    defaultValue={data[0].instruction}
                                    multiline 
                                    maxRows={50}
                                
                                    {...register("instruction", { required: true })}
                                    name="Instruction"
                                    InputProps={{
                                        style: {
                                        color: 'black',
                                        borderBottom: "1px solid black",
                                        },
                                    }}
                                    style={{ fontFamily: 'serif', width: '100%' }}
                                    variant="standard"
                                    />
                                    </div>
                        </div>
                        <div className="  mt-2">

                                <div className="mt-3">
                                {/* input field for ingredients */}
                                <TextField
                                id="standard-multiline-static"
                                label="Ingredients"
                                multiline
                                type="text"
                                placeholder="Edit Ingredients.."
                                                        
                                {...register("ingredients", { required: true })}
                                name="ingredients"
                                maxRows={50}
                                defaultValue={data[0].ingredients}
                                variant="standard"
                                style={{ width: '100%' }}
                                />
                            
                                </div>
                        </div>
                
                    {/* form submit button */}
                    <div className="form-control mt-2">
                            <input  className="btn bg-[#FFBF00] font-Sora font-semibold" type="submit" value="Update recipe" />
                    </div>
                
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditMeal;