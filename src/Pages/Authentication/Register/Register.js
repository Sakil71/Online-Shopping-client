import React, { useContext, useState } from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../context/AuthContext/AuthContext';
import useTitle from '../../../Hooks/useTitle';

const Register = () => {
    useTitle('Register');
    const { createUser, logInGoogle, updateUserInfo } = useContext(AuthProvider);
    const [error, setError] = useState('');

    const naviget = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleData = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUserInfo({
                    displayName: name,
                    photoURL: photo
                })
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
            <div className="hero-content w-3/4 mx-auto">
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleData} className="card-body w-full">
                        <h1 className='text-2xl font-medium'>Create an account</h1>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered rounded w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered rounded w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name='photo' placeholder="photo url" className="input input-bordered rounded w-full" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered rounded w-full" required />
                        </div>

                        <label className="label">
                            <button className="label-text-alt text-red-700 font-bold">{error}</button>
                        </label>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>

                        <p className='label-text-alt font-medium'>Already have an account? <Link to='/login' className=" link link-hover underline">Login</Link></p>

                    </form>


                    <div className='divider'>or</div>
                    <div className='flex justify-center gap-4'>
                        <button onClick={handleGoogle} className='text-xs border border-indigo-950 rounded-full w-10 h-10 flex justify-center items-center text-blue-700 hover:text-blue-400'><FaGoogle></FaGoogle></button>

                        <button className='text-xs border border-indigo-950 rounded-full w-10 h-10 flex justify-center items-center text-blue-700 hover:text-blue-400'><FaFacebook></FaFacebook></button>

                        <button className='text-xs border border-indigo-950 rounded-full w-10 h-10 flex justify-center items-center text-blue-700 hover:text-blue-400'><FaTwitter></FaTwitter></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;