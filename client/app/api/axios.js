import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json', // Añadir cabeceras necesarias
        // 'Authorization': 'Bearer token', // Si necesitas autenticación
    }
})

export default instance ;