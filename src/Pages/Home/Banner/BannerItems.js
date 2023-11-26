import React from 'react';
import './BannerItems.css'
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

const BannerItems = ({ banner }) => {
    const { id, prev, next, img, name, details } = banner;

    return (
        <div id={`slide${id}`} className="banner carousel-item relative w-full h-[200px] md:h-[400px]">
            <img src={img} alt='' className="w-full h-full" />

            <div className='absolute top-[20%] md:top-[30%] left-2 md:left-10 text-white z-10 w-[96%] mx-auto md:w-1/2'>
                <h1 className='text-2xl md:text-6xl font-medium'>{name}</h1>
                <p className='mb-5 hidden md:block'><small>{details}</small></p>
                <p className='mb-5 md:hidden'><small>{details.slice(0, 80)}</small></p>
                <Link className='border rounded text-yellow-500 px-4 py-1 flex items-center justify-between w-[60%] md:w-1/4'><p>Shoppig Now</p> <FaLongArrowAltRight></FaLongArrowAltRight></Link>
            </div>

            <div className='hidden md:block'>
                <div className="absolute flex justify-end gap-4 duration-500 transform right-5 bottom-0 z-10">
                    <a href={`#slide${prev}`} className="btn btn-circle text-xl flex items-center">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle text-xl flex items-center">❯</a>
                </div>
            </div>
        </div>
    );
};

export default BannerItems;