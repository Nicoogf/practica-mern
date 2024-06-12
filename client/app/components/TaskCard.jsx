"use client" ;
import React from 'react'
import { useTask } from '../context/taskContext'
import Link from 'next/link';
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)


const TaskCard = ({task}) => {
    const { deleteTask } = useTask() ;
    return (
        <article className='bg-gray-900 p-4'>
            <p> {task.title} </p>
            <p> {task.description} </p>
            <Link className='bg-blue-400 p-2 rounded-md mr-4' href={`/tasks/${task._id}`}> 
            Editar </Link>
            <button className='bg-red-400 p-2 rounded-md '
             onClick={ ()=>deleteTask(task._id)}> 
             Borrar </button>
            <p> {dayjs(task.date).utc().format("DD/MM/YYYY")  } </p>
        </article>
    )
}

export default TaskCard