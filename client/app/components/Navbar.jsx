"use client"

import Link from 'next/link'
import React from 'react'
import { useAuth } from '../context/authContext';


const Navbar = () => {
    const { isAuthenticated } = useAuth();
    return (
        <nav className='px-3 py-3 bg-gray-800 flex flex-row items-center justify-center'>
            <ul className='flex flex-row gap-x-4 items-center justify-center'>
         { isAuthenticated ? (
             <>
             <li className='bg-gray-600 rounded-md px-5 py-1'>
                Bienvenido Usuario 
             </li>
             <li className='bg-gray-600 rounded-md px-5 py-1'>
                 <Link href="/taskform"> Añadir tarea  </Link>
             </li>
             <li className='bg-gray-600 rounded-md px-5 py-1'>
                 <Link href="/"> Cerrar session  </Link>
             </li>
         </>
         ) :
         (
         <>
            <li className='bg-gray-600 rounded-md px-5 py-1'>
                <Link href="/loguin"> Loguin </Link>
            </li>
            <li className='bg-gray-600 rounded-md px-5 py-1'>
                <Link href="/register"> Register </Link>
            </li>
        </>)}
                   
                  
                        
                
            </ul >
        </nav >
    )
}

export default Navbar
