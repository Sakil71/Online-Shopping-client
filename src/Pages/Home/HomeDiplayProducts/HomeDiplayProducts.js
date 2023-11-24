import React from 'react';
import { Link } from 'react-router-dom';

const HomeDiplayProducts = ({ product }) => {
    const { name, photo, price, _id , details} = product;

    return (
        <div className="card w-[96%] md:w-96 mx-auto shadow-xl bg-slate-200 rounded">
            <figure><img className='h-[300px] w-full rounded' src={photo} alt="Shoes" /></figure>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='font-medium'>Price: ${price}</p>
                <p>{details}</p>

                <div className="card-actions justify-end">
                    <Link to={`/buy/${_id}`} className="px-4 py-1 border-2 border-yellow-600 rounded">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeDiplayProducts;