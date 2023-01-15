import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const CategoryEdit = () => {
    // const {user} = useContext(AuthContext)
    const loadData = useLoaderData()
    const info = loadData[0]
    console.log(info)
    const [users, setUsers] = useState(info)
    // const navigate= useNavigate()
    const handleUpdate = event =>{
        event.preventDefault()
        console.log(users)

         fetch(`http://localhost:5000/categories/${info?._id}`,{
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
            <h1 className='text-3xl text-green-500 font-bold'>Update Category info</h1>
        </div>
        <div className='flex justify-center'>
           <form className='w-96 text-center' onSubmit={handleUpdate} >
            <div className='flex justify-center'>
                <img src={info?.image} alt='' className="rounded-xl w-80" />
            </div>
                
                <label className='mt-3'>Product Name</label>
                <input onChange={handleChange} name='name' defaultValue={info?.name} type="text" placeholder="name" className=" mt-3 input input-bordered w-full "  required /> <br />
                {/* <label className='mt-3'>Price</label> */}
                {/* <input onChange={handleChange} name='price' defaultValue={information.price} type="number" placeholder="price" className=" mt-3 input input-bordered w-full " required /> <br /> */}
                <button className="btn btn-success mt-3 w-full">Update category info</button>
            </form>
        </div>
    </div>
    );
};

export default CategoryEdit;