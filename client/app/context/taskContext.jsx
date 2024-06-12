"use client";
import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../api/task";


const TaskContext = createContext()

export const useTask = () => {
    const context = useContext(TaskContext)
    if (!context) {
        throw new Error("UseTask debe estar adentro de taskProvider")
    }
    return context;
}

export function TaskProvider({ children }) {

    const [tasks, setTask] = useState([]);

    //    const createTask = async( task ) => {
    //     const res = await createTaskRequest(task)
    //     console.log(res)
    //    }

    const createTask = async (task) => {
        try {
            const res = await createTaskRequest(task);
            console.log(res);
        } catch (error) {
            console.error("Error al crear tarea:", error.response ? error.response.data : error.message);
        }
    };

    const getTasks = async () => {
        try {
            const res = await getTasksRequest()
            setTask(res.data)
            console.log(res)
        } catch (error) {
            console.log(error)      
    }
}

    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                getTasks
            }}>

            {children}
        </TaskContext.Provider>
    )
} 