"use client" ;

import React, { useEffect } from 'react'
import { useAuth } from '../context/authContext';
import { useRouter } from 'next/navigation'
import { useTask } from '../context/taskContext';



const TasksPage = () => {
  const router = useRouter()
  const { isAuthenticated , loading  } = useAuth() ;
  const {getTasks, tasks } = useTask() ; 

  if( !loading && !isAuthenticated) return router.push("/loguin")
  console.log(loading ,isAuthenticated )
 console.log(tasks)

  useEffect( () =>{
    getTasks()
  } , [])
  if(tasks.length === 0 ) return (<h3> No hay tareas </h3>)
  return (
    <div>
      <h1> Listado de Tareas </h1>
      <section>
        { loading && <p> Cargando ...</p>}
        <div>
          {tasks.map( (task) => (
            <div className='bg-blue-800 p-2' key={task._id}>
              <p> {task.title} </p>  
              <p> {task.description} </p>
            </div> 
          ))}
        </div>
      </section>
    </div>
  )
}

export default TasksPage