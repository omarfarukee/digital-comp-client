import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const ProductEdit = () => {

    const {user} = useContext(AuthContext)
    const loadData = useLoaderData()
    const information = loadData[0]
    const [users, setUsers] = useState(information)
    // const navigate= useNavigate()
    const handleUpdate = event =>{
        event.preventDefault()
        console.log(users)

         fetch(`http://localhost:5000/products/${information?._id}`, {
            method: 'PUT',

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount > 0){
                console.log(data);
                toast.success('successfully updated')
                // navigate('/')
            }
            
        })
    }

    const handleChange = event =>{
        const filed = event.target.name 
        const value = event.target.value 
        const newUser = {...users} 
        newUser[filed] = value; 
        setUsers(newUser)
    }
    return (
        <div className='pt-12'>
        <div className='mb-3 flex justify-center'>
            <h1 className='text-3xl text-green-500 font-bold'>Update Product info</h1>
        </div>
        <div className='flex justify-center'>
           <form className='text-center w-11/12 lg:w-96' onSubmit={handleUpdate} >
            <div className='flex justify-center'>
                <img src={information?.image} alt="Shoes"  className="rounded-xl w-80" />
            </div>
                
                <label className='mt-3'>Product Name</label>
                <input onChange={handleChange} name='name' defaultValue={information.name} type="text" placeholder="name" className=" mt-3 input input-bordered w-full "  required /> <br />
                <label className='mt-3'>Price</label>
                <input onChange={handleChange} name='price' defaultValue={information.price} type="number" placeholder="price" className=" mt-3 input input-bordered w-full " required /> <br />
                <button className="btn btn-success mt-3 w-full">Update product info</button>
            </form>
        </div>
    </div>
    );
};

export default ProductEdit;