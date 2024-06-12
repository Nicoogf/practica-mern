"use client"

import Link from 'next/link'
import React from 'react'
import { useAuth} from '../context/authContext';


const Navbar = () => {
    const { isAuthenticated , logout ,user} = useAuth();
  
    return (
        <nav className='px-3 py-3 bg-gray-800 flex flex-col items-center justify-center'>

            <p> Bienvendido  {user?.username} </p>
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
                 <Link href="/" onClick={()=> logout()}> Cerrar session  </Link>
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
