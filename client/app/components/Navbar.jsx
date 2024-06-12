import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <nav className='px-3 py-3 bg-gray-800 flex flex-row items-center justify-center'>
    <ul className='flex flex-row gap-x-4 items-center justify-center'>
    <li className='bg-gray-600 rounded-md px-5 py-1'>
            <Link href="/"> Inicio </Link>
        </li>
        <li className='bg-gray-600 rounded-md px-5 py-1'>
            <Link href="/loguin"> Loguin </Link>
        </li>
        <li className='bg-gray-600 rounded-md px-5 py-1'>
            <Link href="/register"> Register </Link>
        </li>      
    </ul>
   </nav>
  )
}

export default Navbar
