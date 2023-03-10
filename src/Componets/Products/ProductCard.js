import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {name, image, price, _id, categoryId} = product
    const [prod, setProd] = useState([])

    useEffect(() =>{
        axios.get('https://digital-comp-server.vercel.app/products')
        .then(data => setProd(data.data))
    } ,[])

    const handleDeleteProd = id =>{
        const proceed = window.confirm('Are you sure you want to delete this product?')
        if(proceed){
            fetch( `https://digital-comp-server.vercel.app/products/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    toast.success('Deleted Successfully')
                    const remaining = prod.filter(pro => pro._id !== id)
                    setProd(remaining)
                    window.location.reload()
                }
            })
        }
  }
    return (
        <div className='mb-3'>
            <div className="card w-11/12 ml-3 lg:ml-0 lg:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes"  className="rounded-xl h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>price - {price} Rs.</p>
                    <div className="card-actions">
                        <button onClick={() => handleDeleteProd(_id)} className="btn btn-error">delete</button>
                       <Link to={`/products/${categoryId}/${_id}`}><button className="btn btn-primary">Edit---</button></Link> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;