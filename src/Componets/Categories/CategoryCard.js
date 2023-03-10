import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaCross, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CategoryCard = ({ category }) => {
    const {loading} = useContext(AuthContext)
    const { name, image, _id } = category
    const [prod, setProd] = useState([])

    useEffect(() =>{
        axios.get('https://digital-comp-server.vercel.app/categories')
        .then(data => setProd(data.data))
    } ,[])

    const handleDeleteCategory = id =>{
        const proceed = window.confirm('Are you sure you want to delete this Category?')
        if(proceed){
            fetch( `https://digital-comp-server.vercel.app/categories/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('Deleted Category Successfully')
                    const remaining = prod.filter(pro => pro._id !== id)
                    setProd(remaining)
                    window.location.reload()
                }
            })
        }
  }
    return (
        <div className='mb-3'>
            <div className="card w-11/12 ml-3 lg:ml-0 lg:w-96 h-64 bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="Shoes" /></figure>

                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title">{name}</h2>
                        <button  onClick={() => handleDeleteCategory(_id)} className='text-white bg-slate-500 pt-1 pl-3 pr-3 pb-1 hover:text-black hover:bg-slate-50 rounded-full' title='Delete category'>X</button>
                    </div>

                    <div className="card-actions justify-end mt-20">
                        <Link to={`/products/${_id}`}><button className="btn btn-primary">see products</button></Link>
                      <Link to={`/categories/${_id}`}><button className="btn btn-warning" title='Edit category'><FaEdit></FaEdit></button></Link>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;