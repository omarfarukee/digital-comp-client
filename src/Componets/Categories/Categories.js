import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import CategoryCard from './CategoryCard';

const Categories = () => {
    
    const { data: categories = [], refetch} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`https://digital-comp-server.vercel.app/categories`);
            const data = await res.json();
            return data;
        }  
    });
   
    return (
        <div>
            <div className='text-4xl text-gray-500 font-bold flex justify-center mt-5'>
                <h1>Here ere the Categories</h1>
            </div>
            <div className='flex justify-center'>
                 <div className='lg:grid lg:grid-cols-3 lg:gap-3 mt-8'>
                {
                    categories?.map(category => <CategoryCard
                    key={category._id}
                    category={category}
                    ></CategoryCard>)
                }
            </div>
            </div>
        
        </div>
    );
};

export default Categories;