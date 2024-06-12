"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { useTask } from '../context/taskContext';


const TaskFormPage = () => {
    const { register, handleSubmit } = useForm();
    const { createTask } = useTask();

    const onSubmit = handleSubmit((data) => {
        createTask(data);
    });

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <form onSubmit={onSubmit} className="flex flex-col gap-y-2 text-black">
            <input type='text' placeholder='Ingresar tarea' className='w-[250px] block mx-auto rounded-md py-1 px-3'
            {...register("title")}
            autoFocus
            />
            <textarea rows={3} placeholder='descripcion'
             className='w-[250px] block mx-auto rounded-md py-1 px-3'
            {...register("description")}/>

            <button className='bg-blue-500 text-white px-3 py-1 w-[250px] mx-auto block rounded-md'> 
                Guardar 
            </button>
        </form>
    </div>
  )
}

export default TaskFormPage ;
