import React from 'react';
import AnimalCard from '../shared/AnimalCard';
import Link from 'next/link';

const FeaturedAnimals = ({data}) => {
    const featuredAnimal = data?.slice(0,4)
    return (
        <div className='container mx-auto px-6 mt-16'>
            <div className='my-4'>
                <h2 className='text-3xl font-bold text-green-500'>Featured Cattle</h2>
                <p className='text-gray-600 font-semibold'>Choose from our best cattle for your Qurbani</p>
            </div>
           <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4'>
             {featuredAnimal.map(d=>(<AnimalCard key={d.id} animal={d}></AnimalCard>))}
           </div>
           <div className='flex items-center justify-center'>
            <Link href="/all-animals"><button className='btn bg-green-500 text-white my-4 text-center'>View All</button></Link>
           </div>
        </div>
    );
};

export default FeaturedAnimals;