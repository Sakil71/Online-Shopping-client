import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import HomeDiplayProducts from '../HomeDiplayProducts/HomeDiplayProducts';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(9);

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.count);
                setProducts(data.products);
                setCount(data.count);
            })
    }, [page, size]);

    const pages = Math.ceil(count / size);

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

                <div className='my-5 text-center flex justify-center items-center'>
                    <button onClick={() => {
                        if (page <= 0) {
                            setPage(page)
                            return;
                        }
                        else {
                            setPage(page - 1)
                        }
                    }} className='text-xs m-4 border border-indigo-950 rounded px-2 py-[6px]'><IoIosArrowBack></IoIosArrowBack></button>
                    {
                        [...Array(pages).keys()].map(number => <button key={number}
                            onClick={() => setPage(number)}
                            className={`${page === number ? 'bg-indigo-900 text-white' : ''} m-[2px] px-2 py-1 text-xs border border-indigo-950 rounded font-bold`}>{number + 1}</button>)
                    }

                    <button onClick={() => {
                        if ((pages - 1) === page) {
                            setPage(page)
                            return;
                        }
                        else {
                            setPage(page + 1)
                        }
                    }} className='text-xs m-4 border border-indigo-950 rounded px-2 py-[6px]'><IoIosArrowForward></IoIosArrowForward></button>


                    <select onChange={(event) => setSize(event.target.value)} className='m-4 outline-none cursor-pointer text-xs border border-indigo-950 rounded font-bold  py-1'>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="10" selected>9</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Home;