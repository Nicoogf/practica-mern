"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { useTask } from '../context/taskContext';
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)


const TaskFormPage = () => {
    const { register, handleSubmit } = useForm();
    const { createTask } = useTask();
    const router = useRouter()

    const onSubmit = handleSubmit((data) => {
        createTask({...data,
            date : dayjs.utc(data.date).format()
        });
        router.push("/tasks")
    });

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <form onSubmit={onSubmit} className="flex flex-col gap-y-2 text-black">
            <label htmlFor='title' className='text-white text-sm'> Titulo de la tarea</label>
            <input type='text' placeholder='Ingresar tarea' className='w-[250px] block mx-auto rounded-md py-1 px-3'
            {...register("title")}
            autoFocus
            />

            <label htmlFor='descripcion' className='text-white text-sm'> Descripcion </label>
            <textarea rows={3} placeholder='descripcion'
             className='w-[250px] block mx-auto rounded-md py-1 px-3'
            {...register("description")}/>

            <label htmlFor='descripcion' className='text-white text-sm'> Descripcion </label>
            <input type="date" {...register("date")} className='rounded-md'/>

            <button className='bg-blue-500 text-white px-3 py-1 w-[250px] mx-auto block rounded-md'> 
                Guardar 
            </button>
        </form>
    </div>
  )
}

export default TaskFormPage ;
