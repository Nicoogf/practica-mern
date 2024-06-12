"use client";

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import { useTask } from '@/app/context/taskContext';
import { useParams } from 'next/navigation'
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)



const TaskIdPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { getTask, updateTask } = useTask();
  const params = useParams()
  const router = useRouter()

  const onSubmit = handleSubmit((data) => {
    updateTask(params.id, {
      ...data,
      date: dayjs.utc(data.date).format()
    });
    router.push("/tasks")
  });



  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id)
        setValue("title", task.title)
        setValue("description", task.description)
      }
    }
    loadTask()
  }, [])


  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <form onSubmit={onSubmit} className="flex flex-col gap-y-2 text-black">
        <label htmlFor='title' className='text-white text-sm'> Titulo de la tarea</label>
        <input type='text' placeholder='Ingresar tarea' className='w-[250px] block mx-auto rounded-md py-1 px-3'
          {...register("title")}
          autoFocus
        />
        <label htmlFor='descripcion' className='text-white text-sm'> Descripcion de la tarea</label>
        <textarea rows={3} placeholder='descripcion'
          className='w-[250px] block mx-auto rounded-md py-1 px-3'
          {...register("description")} />

        <label htmlFor='descripcion' className='text-white text-sm'> Descripcion </label>
        <input type="date" {...register("date")} className='rounded-md' />

        <button className='bg-blue-500 text-white px-3 py-1 w-[250px] mx-auto block rounded-md'>
          Editar Tarea
        </button>
      </form>
    </div>
  )
}

export default TaskIdPage;
