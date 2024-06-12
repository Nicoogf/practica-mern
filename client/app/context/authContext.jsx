"use client";

import React, { useState, createContext, useContext, useEffect } from 'react';
import { registerRequest, loguinRequest, verifyToken } from '../api/auth';
import Cookies from "js-cookie"

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth debe estar dentro del AuthProvider")
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true)

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

    const signin = async (user) => {
        try {
            const res = await loguinRequest(user)
            console.log(res)
            setIsAuthenticated(true)
            setUser(res.data)
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
    }

    const logout = () => {
        Cookies.remove("token")
        setIsAuthenticated(false)
        setUser(null)
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        async function checkLoguin() {
            const cookies = Cookies.get();

            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false)
                return setUser(null)
            }

            try {
                const res = await verifyToken(cookies.token);
                if (!res.data) {
                    setIsAuthenticated(false)
                    setLoading(false)
                    return
                }
                setIsAuthenticated(true)                
                setUser(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
            }
        }
        checkLoguin()
    }, [])

    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            logout,
            loading,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}

