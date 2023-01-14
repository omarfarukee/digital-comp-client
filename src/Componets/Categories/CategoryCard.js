import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const {name, image,_id} = category
    return (
        <div>
            <div className="card w-96 h-64 bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end mt-20">
                      <Link to={`/products/${_id}`}><button className="btn btn-primary">see products</button></Link> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;