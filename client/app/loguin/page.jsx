"use client";
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/authContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const LoguinPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { signin, errors: signinErrors, isAuthenticated } = useAuth();

  const router = useRouter()

  const onSubmit = handleSubmit(data => {
    signin(data)
  })
  
  useEffect( () => {
    if(isAuthenticated) router.push("/tasks")
  },[isAuthenticated])

  return (
    <div className='flex flex-col justify-center items-center h-screen'>

      {
        signinErrors.map((error, i) => (
          <div className="text-white px-3 py-1 bg-red-500 w-[250px] rounded-md mx-auto mb-2" key={i}>
            {error}
          </div>
        ))
      }

      <h1 className='font-bold text-2xl'> Inicia Seccion</h1>

      <form className="flex flex-col gap-y-2 text-black"
        onSubmit={onSubmit}>


        <input type="email" name="email" className="rounded-md w-[200px]  block mx-auto py-1 px-3"
          {...register("email", { required: true })} placeholder="ingresar email" />

        {errors.email && (
          <div className="text-white px-3 py-1 bg-red-500 w-[200px] block mx-auto">
            El email es requerido
          </div>
        )}


        <input type="password" name="password" className="rounded-md w-[200px]  block mx-auto  py-1 px-3"
          {...register("password", { required: true })} placeholder="ingresar contraseña" />

        {errors.password && (
          <div className="text-white px-3 py-1 bg-red-500 w-[200px] block mx-auto">
            la contraseña es requerida
          </div>
        )}


        <button className="bg-blue-500 text-white font-bold block w-[200px] mx-auto rounded-md py-2"> Ingresar </button>

      </form>

        <p className='text-sm text-gray-200'> 
        No tienes una cuenta ? 
        <Link href="/register">  
        <span className="text-blue-400 mx-4"> Crea una </span>
        </Link>
        </p> 
    

    </div>
  )
}

export default LoguinPage
