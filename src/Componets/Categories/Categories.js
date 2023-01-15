import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const { data: categories = [], refetch} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`);
            const data = await res.json();
            return data;
        }  
    });
    return (
        <div>
            <div className='flex justify-center'>
                 <div className='grid grid-cols-3 gap-3'>
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