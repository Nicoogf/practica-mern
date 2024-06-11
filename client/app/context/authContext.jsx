"use client";

import React, { useState, createContext, useContext } from 'react';
import { registerRequest , loguinRequest } from '../api/auth';

const AuthContext = createContext() ;

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth debe estar dentro del AuthProvider")
    }
    return context
} 

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [ isAuthenticated, setIsAuthenticated ] = useState( false )
    const [ errors , setErrors ] = useState([])

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {            
            setErrors(error.response.data)
            console.log(error)
        }
    }

    const signin = async( user ) => {
        try {
        const res = await loguinRequest (user)
        console.log(res)
        } catch (error) {
            setErrors(error.response.data)
        }
        
    }

    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}

