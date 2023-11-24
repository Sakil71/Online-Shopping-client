import React from 'react';
import Banner from '../Banner/Banner';
import HomeDiplayProducts from '../HomeDiplayProducts/HomeDiplayProducts';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const products = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className='my-20 w-[96%] mx-auto'>
                <h1 className='mb-5 text-2xl font-medium text-center'>Hot Collection</h1>
                <div className=' grid grid-cols-1 gap-10 md:grid-cols-3'>
                    {
                        products.map(product => <HomeDiplayProducts key={product._id} product={product}></HomeDiplayProducts>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;