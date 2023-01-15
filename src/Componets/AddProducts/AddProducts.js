import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const { data: categories = [], refetch} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`);
            const data = await res.json();
            return data;
        }  
    });
    // console.log(categories[0]._id)


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
    
                price: data.price,
                categoryId: data.categoryId,

            }

          
            fetch('http://localhost:5000/products', {

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
                toast.success('added Item successfully')
             navigate('/')
            })

          }
        })
    }



    return (
        <div>
            <div className='flex justify-center text-gray-500 text-3xl font-bold mt-10 mb-10'><h1>Add Products</h1></div>
            <div className=' flex justify-center'>
                <form onSubmit={handleSubmit(handleAddItem)} className='shadow-2xl p-4 rounded-3xl w-11/12 lg:w-96'>

                <div className=' p-5 rounded-2xl'>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Price</span></label>
                        <input type="number" {...register("price", {
                            required: "Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                    </div>

                    <div className=''>
                        <label className="label"> <span className="label-text">Choose Category</span></label>
            
                        <select className="select select-bordered  w-full max-w-xs" {...register("categoryId")}>
                        {
                            categories?.map(cat => <option value={cat._id}>{cat.name}</option>)
                        }
                          
                            {/* <option value="63c15fcf4f3b8cff2d8395cd">Pants</option> */}
                            {/* <option value="63917f1a9d1e4e778fde857c">C- Shoes</option> */}
                        </select>
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

export default AddProducts;