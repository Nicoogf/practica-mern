import axios from "./axios.js"

export const gestTasksRequest = () =>  axios.get("/tasks")

export const gestTaskRequest = (id) =>  axios.get(`/tasks/${id}`)

export const createTaskRequest = (task) =>  axios.post("/tasks" , task)

export const updateTaskRequest = (task) =>  axios.put(`/tasks/${task._id}` , task )

export const deleteTaskRequest = (id) =>  axios.delete(`/tasks/${id}`)

