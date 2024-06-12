"use client" ;

import React, { useEffect } from 'react'
import { useAuth } from '../context/authContext';
import { useRouter } from 'next/navigation'
import { useTask } from '../context/taskContext';
import TaskCard from '../components/TaskCard';



const TasksPage = () => {
  const router = useRouter()
  const { isAuthenticated , loading  } = useAuth() ;
  const {getTasks, tasks } = useTask() ; 

  if( !loading && !isAuthenticated) return router.push("/loguin")
 

  useEffect( () =>{
    getTasks()
  } , [])
  if(tasks.length === 0 ) return (<h3> No hay tareas </h3>)
  return (
    <div>
      <h1> Listado de Tareas </h1>
      <section>
        { loading && <p> Cargando ...</p>}
        <div className='grid grid-cols-3 gap-2'>
          {tasks.map( (task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default TasksPage