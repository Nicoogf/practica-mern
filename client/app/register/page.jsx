"use client";

import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

const RegisterPage = () => {

  const { 
    register, 
    handleSubmit, 
    formState: { errors },  
   } = useForm() ;

  const { signup, isAuthenticated ,errors: registerErrors } = useAuth() ;

  const router = useRouter() ;


  useEffect(() => {
    if (isAuthenticated) router.push("/tasks")
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
    signup(values)
  })

  return (
    <main>

      {
      registerErrors.map((error ,i )=> (
        <div className="text-white px-3 py-1 bg-red-500 w-[250px] rounded-md mx-auto mb-2" key={i}>
           {error} 
        </div>
      ))
      }

      <form className="flex flex-col gap-y-2 text-black"
        onSubmit={onSubmit}>

        <input type="text" name="username" className="rounded-md w-[200px] block mx-auto py-1 px-3"
          {...register("username", { required: true })} placeholder="ingresar username" />

        {errors.username && (
          <div className="text-white px-3 py-1 bg-red-500 w-[200px] block mx-auto">
            El usuario es requerido
          </div>
        )}

        <input type="email" name="email" className="rounded-md w-[200px]  block mx-auto py-1 px-3"
          {...register("email", { required: true })} placeholder="ingresar email" />

        {errors.email && (
          <div className="text-white px-3 py-1 bg-red-500 w-[200px] block mx-auto">
            El email es requerido
          </div>
        )}


        <input type="password" name="password" className="rounded-md w-[200px]  block mx-auto  py-1 px-3"
          {...register("password", { required: true })} placeholder="ingresar contraseña" />

              {errors.password &&(
            <div className="text-white px-3 py-1 bg-red-500 w-[200px] block mx-auto">
             la contraseña es requerida
            </div>
          )}


        <button className="bg-blue-500 text-white font-bold block w-[30%] max-w-[200px] mx-auto rounded-md py-2"> Registrar Usuario </button>

      </form>
    </main>
  )
}

export default RegisterPage