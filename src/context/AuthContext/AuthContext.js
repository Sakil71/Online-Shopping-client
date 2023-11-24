import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthProvider = createContext();



const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserInfo = profile => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    const logInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    const value = {
        user,
        loading,
        setLoading,
        createUser,
        logInUser,
        updateUserInfo,
        logInGoogle,
        logOut,
    }

    return (
        <AuthProvider.Provider value={value}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;