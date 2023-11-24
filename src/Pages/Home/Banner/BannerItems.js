import React from 'react';
import './BannerItems.css'
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

const BannerItems = ({banner}) => {
    const {id, prev, next, img, name, details} = banner;
    
    return (
        <div id={`slide${id}`} className="banner carousel-item relative w-full h-[400px]">
            <img src={img} alt='' className="w-full h-full"	/>

            <div className='absolute top-[30%] left-10 text-white z-10 w-1/2'>
                <h1 className='md:text-6xl font-medium'>{name}</h1>
                <p className='mb-5'><small>{details}</small></p>
                <Link className='border rounded text-yellow-500 px-4 py-1 flex items-center justify-between w-1/4'><p>Shoppig Now</p> <FaLongArrowAltRight></FaLongArrowAltRight></Link>
            </div>            
            
            <div className="absolute flex justify-end gap-4 duration-500 transform  right-5 bottom-0 z-10">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;