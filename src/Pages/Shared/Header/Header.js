import React, { useContext, useEffect, useState } from 'react';
import { IoIosCloseCircle, IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../context/AuthContext/AuthContext';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthProvider);
    const [open, setOpen] = useState(false);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://online-shopping-server.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => { setOrders(data); })

    }, [user?.email])

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => { })
    }

    return (
        <div className="navbar bg-base-100 px-2 md:px-10 font-medium sticky top-0 z-50">

            {/* For small screen */}
            <div onClick={() => setOpen(!open)} className='md:hidden h-10 w-10 text-3xl z-20 cursor-pointer'>
                {
                    open ?
                        <IoIosCloseCircle></IoIosCloseCircle>
                        :
                        <IoIosMenu></IoIosMenu>

                }
            </div>

            <div className="flex-1">
                <Link className="btn btn-ghost text-xl md:text-2xl font-bold">Online Shopping</Link>
            </div>
            <div className="flex items-center gap-5">
                <div onClick={() => setOpen(!open)} className={`${open ? 'top-0' : 'top-[-250px]'} absolute md:static left-0 p-5 md:p-0 duration-1000 w-full md:w-auto flex flex-col md:flex-row items-center gap-5 bg-yellow-400 md:bg-transparent`}>
                    <div>
                        <Link to='/' className='border border-rose-800 rounded py-1 px-4'>Home</Link>
                    </div>
                    <div>
                        <Link to='/orders' className='border border-rose-800 rounded py-1 px-4'>Orders</Link>
                    </div>

                    <div>
                        <Link to='/add' className='border border-rose-800 rounded py-1 px-4'>Add Products</Link>
                    </div>
                    <div>
                        {
                            user ?
                                <button onClick={handleLogOut} className='border border-rose-800 text-red-700 rounded py-1 px-4'>Logout</button>
                                :
                                <Link to='/login' className='border border-rose-800 rounded py-1 px-4'>Login</Link>
                        }
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">

                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item bg-white">{orders.length}</span>
                        </div>

                    </label>

                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">{orders.length} Items Ordered</span>
                            <p className="text-indigo-950 font-bold">
                                Total Price: 
                                {
                                    orders.reduce((prev, cur) => prev + (parseInt(cur.price) * parseInt(cur.quantity)), 0)
                                }
                            </p>
                            <div className="card-actions">
                                <Link to='/cart' className="py-2 px-4 text-center bg-indigo-800 hover:bg-indigo-600 text-white rounded  btn-block">View cart</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-emerald-700 flex justify-center">
                        <div className='rounded-full'>
                            {
                                user?.photoURL ?
                                    <img alt="" src={user?.photoURL} />
                                    :
                                    <FaUser className='text-xl'></FaUser>
                            }

                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="font-bold text-lg">
                                {user?.displayName}
                            </Link>
                        </li>
                        <li><Link>Settings</Link></li>

                        {
                            user &&
                            <li className='text-rose-900'><button onClick={handleLogOut}>Logout</button></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;