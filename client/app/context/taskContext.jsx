"use client" ;
import { createContext, useContext, useState } from "react" ;

const TaskContext = createContext()

export const useTask = () => {
    const context = useContext(TaskContext)
    if(!context){
        throw new Error( "UseTask debe estar adentro de taskProvider")
    }
    return context ;
} 

export function TaskProvider({children}){

    const [tasks, setTask] = useState([])
    const createTask = ( task ) => {
        console.log("task" )
    }

    return(
        <TaskContext.Provider value={{tasks,createTask}}>
            {children}
        </TaskContext.Provider>
    )
} 