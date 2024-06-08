import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/merndb")
        console.log(">>> Conexion a la base de datos exitosa")
    } catch (error) {
        console.log(error)
    }
}
