import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { AuthProvider } from '../../../context/AuthContext/AuthContext';
import useTitle from '../../../Hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const { logInUser, logInGoogle } = useContext(AuthProvider);
    const [error, setError] = useState('');

    const naviget = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleData = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                naviget(from, { replace: true });
                setError('');
                form.reset()
            })
            .catch(err => setError(err.message));
    }

    const handleGoogle = () => {
        logInGoogle()
            .then(result => {
                console.log(result.user);
                naviget(from, { replace: true });
            })
            .catch(err => setError(err.message));
    }
    return (
        <div className="hero">
            <div className="hero-content w-[98%] md:w-3/4 mx-auto">
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleData} className="card-body w-full">
                        <h1 className='text-2xl font-medium'>Login Now</h1>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered rounded w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered rounded w-full" required />

                            <label className="label">
                                <button className="label-text-alt link link-hover underline">Forgot password?</button>
                            </label>
                        </div>

                        <label className="label">
                            <button className="label-text-alt font-bold">{error}</button>
                        </label>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>

                        <p className='label-text-alt font-medium'>New in here? <Link to='/register' className=" link link-hover underline">Register</Link></p>
                    </form>

                    <div className='divider'>or</div>
                        <div className='flex justify-center gap-4 pb-4'>
                            <button onClick={handleGoogle} className='text-xs border border-indigo-950 rounded-full w-10 h-10 flex justify-center items-center text-blue-700 hover:text-blue-400'><FaGoogle></FaGoogle></button>

                            <button className='text-xs border border-indigo-950 rounded-full w-10 h-10 flex justify-center items-center text-blue-700 hover:text-blue-400'><FaFacebook></FaFacebook></button>

                            <button className='text-xs border border-indigo-950 rounded-full w-10 h-10 flex justify-center items-center text-blue-700 hover:text-blue-400'><FaTwitter></FaTwitter></button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Login;