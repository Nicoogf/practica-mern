"use client";

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import { useTask } from '@/app/context/taskContext';
import { useParams } from 'next/navigation'


const TaskIdPage = () => {
  const { register, handleSubmit , setValue} = useForm();
  const { createTask, getTask } = useTask();
  const router = useRouter()

  const onSubmit = handleSubmit((data) => {
    createTask(data);
    router.push("/tasks")
  });

  const params = useParams()

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id)
        setValue("title" ,task.title )
      }
    }
  }, [])


  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <form onSubmit={onSubmit} className="flex flex-col gap-y-2 text-black">
        <input type='text' placeholder='Ingresar tarea' className='w-[250px] block mx-auto rounded-md py-1 px-3'
          {...register("title")}
          autoFocus
        />
        <textarea rows={3} placeholder='descripcion'
          className='w-[250px] block mx-auto rounded-md py-1 px-3'
          {...register("description")} />

        <button className='bg-blue-500 text-white px-3 py-1 w-[250px] mx-auto block rounded-md'>
          Editar Tarea
        </button>
      </form>
    </div>
  )
}

export default TaskIdPage;
