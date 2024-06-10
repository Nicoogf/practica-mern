"use client";

import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

const RegisterPage = () => {
  const { register, handleSubmit } = useForm()
  const { singUp, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) router.push("/tasks")
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
    singUp(values)
  })

  return (
    <main>
      <form className="flex flex-col gap-y-2 text-black"
        onSubmit={onSubmit}>
        <input type="text" name="username" className="rounded-md w-[200px] block mx-auto py-1 px-3"
          {...register("username", { required: true })} placeholder="ingresar username" />

        <input type="email" name="email" className="rounded-md w-[200px]  block mx-auto py-1 px-3"
          {...register("email", { required: true })} placeholder="ingresar email" />

        <input type="password" name="password" className="rounded-md w-[200px]  block mx-auto  py-1 px-3"
          {...register("password", { required: true })} placeholder="ingresar contraseña" />

        <button className="bg-blue-500 text-white font-bold block w-[30%] max-w-[200px] mx-auto rounded-md py-2"> Registrar Usuario </button>

      </form>
    </main>
  )
}

export default RegisterPage