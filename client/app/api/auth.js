import axios from "./axios.js";

export const registerRequest = (user) => axios.post(`/register`, user)
export const loguinRequest = (user) => axios.post(`/loguin`, user)
export const verifyToken = () => axios.get("/verify")


