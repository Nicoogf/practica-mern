"use client" ;

import React from 'react'
import { useAuth } from '../context/authContext';
import { useRouter } from 'next/navigation'



const TasksPage = () => {
  const router = useRouter()
  const { isAuthenticated , loading } = useAuth() ;
  if( !loading && !isAuthenticated) return router.push("/loguin")
  console.log(loading ,isAuthenticated )
  return (
    <div>
      <h1> Listado de Tareas </h1>
      <section>
        { loading && <p> Cargando ...</p>}
      </section>
    </div>
  )
}

export default TasksPage