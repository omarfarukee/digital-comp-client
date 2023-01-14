import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData()
    console.log(products.length)

    return (
        <div>
            <div className='flex justify-center mt-5'>
                {products?.length === 0 ? <h1 className='text-3xl text-red-600'>No products products founded based on this category</h1>
                :
                <h1 className='text-3xl text-green-600'>{products?.length} products founded based on this category</h1>

                }
            </div>
            <div className='flex justify-center'>
                 <div className='grid grid-cols-3 mt-10 gap-5'>
                {
                    products?.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>

            </div>
           
        </div>
    );
};

export default Products;