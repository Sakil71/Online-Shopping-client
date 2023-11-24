import React, { useContext } from 'react';
import { AuthProvider } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRours = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);

    const location = useLocation();

    if (loading) {
        return <div className='absolute top-1/2 left-1/2 translate-x-[-50%]'>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRours;