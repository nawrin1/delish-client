

//this page is for editing data

"use client"


import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ingredient from '../../../ingredients.json'
import Select from 'react-select';
// import { Select} from 'antd';
import Swal from "sweetalert2";


const CreateMeal = () => {
    const router=useRouter() 
    const [selectedValues, setSelectedValues] = useState([]);

    const { register, handleSubmit, reset, formState: { errors },setError,control,setValue } = useForm();
    const handleSelectChange = (selectedOptions) => {
  
        setSelectedValues(selectedOptions);
        
        setValue('ingredients', selectedOptions, { shouldValidate: true });
      };

    const onSubmit=async (datas)=>{
        const ingredients=selectedValues.map(meal=>meal.label)
        console.log(ingredient)
        const recipe={name:datas.title, image:datas.image,ingredients:ingredients,instruction:datas.instruction}
        console.log(recipe)

        //posting recipe

        fetch(`https://delish-server-tau.vercel.app/allRecipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe),
        })
            .then(res => res.json()) 
            .then(data => {
                console.log(data)
                if (data.insertedId.length > 0) {

                    // sweet alert after creating recipe
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Recipe Created`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                   
                }
            })
            .catch(error => console.log(error));

    }
    return (
        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto  px-4">
            <h2 className="text-center text-4xl my-6 font-bold">Create Recipe</h2>

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
                                    placeholder="Enter title.."
                                    InputProps={{
                                        style: {
                                        color: 'black',
                                        borderBottom: "1px solid black",
                                        },

                                    }}
                                    style={{ fontFamily: 'serif', width: '100%' }}
                                    variant="standard"  
                                    />
                                    {errors.title && <span className="text-red-600 text-[10px]">Title is required</span>}
                                    </div>
                        </div>
                        <div className="form-control  ">
                                    <div>
                                    {/* input field for image */}
                                    <TextField
                                    id="outlined-search2"
                                    label="Image"
                                    type="text"
                                    placeholder="Enter image link.."

                                    {...register("image")}     
                                    name="image"
                                    InputProps={{
                                        style: {
                                        color: 'black',
                                        borderBottom: "1px solid black",
                                        }
                                    
                                    }}
                                    style={{ fontFamily: 'serif', width: '100%' }}
                                    variant="standard"
                                    />

                                    </div>
                        </div>
                        <div className="form-control  ">
                                <div>
                                    {/* input field for instruction */}
                                    <TextField
                                    id="outlined-search3"
                                    label="Instruction"
                                    type="text"
                                    placeholder="Enter Instruction.."
                                    multiline 
                                    maxRows={50}
                                
                                    {...register("instruction",{ required: true })}
                                    name="instruction"
                                    InputProps={{
                                        style: {
                                        color: 'black',
                                        borderBottom: "1px solid black",
                                        },
                                    }}
                                    style={{ fontFamily: 'serif', width: '100%' }}
                                    variant="standard"
                                    />
                                    {errors.instruction && <span className="text-red-600 text-[10px]">Instruction is required</span>}
                                    </div>
                        </div>
                        <div className="  mt-2">

                                <div className="mt-3">
                                {/* input field for ingredients */}

                                      
                               <Controller
                                control={control} 
                                name="ingredients" 
                            
                                rules={{ required: "Please select atleast one ingredient" }} 
                                render={({ field }) => (
                               
                                <Select
                                    {...field} 
                                    isMulti 
                                    options={ingredient} 
                                    getOptionValue={(ingredient) =>ingredient.label}
                                    getOptionLabel={(ingredient) =>ingredient.label}
                                    
                                    onChange={handleSelectChange}
                                />
                                )}
                            />
                             {errors.ingredients && <span className="text-red-600 text-[10px]">{errors.ingredients.message}</span>}


                                {/* <Select
                                  
                                    isMulti
                                    name="recipe"
                                    options={ingredient}

                                    getOptionValue={(ingredient) =>ingredient.label}
                                    getOptionLabel={(ingredient) =>ingredient.label}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                     onChange={handleSelectChange}
                                /> */}
                                       
                             </div>
                        </div>
                
                    {/* form submit button */}
                    <div className="form-control mt-2">
                            <input  className="btn bg-[#FFBF00] font-Sora font-semibold" type="submit" value="Create recipe" />
                    </div>
                
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateMeal;