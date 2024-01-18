// delete component for deleting recipes


"use client"
import { getRecipe } from "@/utils/getRecipe";
import { useRouter } from 'next/navigation'
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import useSWR, { mutate } from "swr";

const Delete = ({id}) => {
    // console.log(id)
        const router=useRouter()
        const { data: recipes } = useSWR('allRecipes', getRecipe())
        const handleDelete = (id) => {
            fetch(`http://localhost:4000/allRecipes/${id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json', 
              },
              
            })
              .then((response) => {
                
                return response.json(); 
              })
              .then((data) => {
                
                if (data.deletedCount > 0) {
                    
                    mutate('allRecipes')
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Deleted!`,
                        showConfirmButton: false,
                        timer: 1500
                      });

                      router.push('/');

                      

                  
                }
              })
              .catch((error) => {
                console.log(error)
                
              });
          };
          

    return (
        <div>
            <div><button className="btn btn-outline btn-sm" onClick={()=>handleDelete(id)}><div className="flex"><MdOutlineDeleteOutline className="text-[20px] mb-1"></MdOutlineDeleteOutline><p className="mt-1">Delete</p></div></button></div>
            
        </div>
    );
};

export default Delete;