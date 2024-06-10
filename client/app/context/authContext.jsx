"use client";
import React, { useState, createContext, useContext } from 'react';
import { registerRequest } from '../api/auth';

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

    const singUp = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
        }
    
    }

    return (
        <AuthContext.Provider value={{
            singUp,
            user,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}

