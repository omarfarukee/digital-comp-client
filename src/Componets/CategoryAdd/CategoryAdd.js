import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CategoryAdd = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const imageHosKey = '29473dd4ab78ebc95009722bc0558d38';
    const navigate = useNavigate()

    const handleAddItem = (data) => {
        console.log(data)

        const image = data.image[0];
        const fromData = new FormData();
        fromData.append('image', image);

        const url= `https://api.imgbb.com/1/upload?&key=${imageHosKey}` 
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: fromData
        })
        .then(res => res.json()) 
        .then(imgData => {
          if(imgData.success){
            console.log(imgData.data.url)


            const product = {
                name: data.name ,
                image: imgData.data.url,

            }

          
            fetch('http://localhost:5000/categories', {

                method: 'POST', 
                headers: {
                    'content-type': 'application/json', 

                }, 
                body: JSON.stringify(product)
            })
            .then(res => res.json())
            .then(result => {
                
                console.log(result)
                alert('its can take few moment please wait')
                toast.success('added Category successfully')
             navigate('/')
            })

          }
        })
    }


    return (
        <div>
            <div className='flex justify-center text-gray-500 text-3xl font-bold mt-10 mb-10'><h1>Add Category</h1></div>
            <div className=' flex justify-center'>
                <form onSubmit={handleSubmit(handleAddItem)} className='shadow-2xl p-5 rounded-3xl'>

                <div className=' p-5 rounded-2xl'>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Category Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo (photo Should be png/jpg format)</span></label>
                        <input type="file" {...register("image", {
                            required: 'Required'
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                    </div>
                </div>
                <div className='flex justify-center'>
                    <input className='btn btn-success  mt-4 ' value="add this" type="submit" />
                </div>

            </form>
            </div>
            
        </div>
    );
};

export default CategoryAdd;