import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: "El usuario es requerido"
    }),
    email: z.string({
        required_error: "La contraseña es requerida"
    }).email({
        message: "El email no es valido"
    }),
    password: z.string({
        required_error: "La contraseña es requerida"
    }).min(6, {
        message: "Debe tener 6 caracteres"
    })
});


export const loguinSchema = z.object({
    email: z.string({ required_error: "El email es requerido" }).email({ message: "El email no es valido" }),
    password: z.string({ required_error: "La contraseña es requerida" }).min(6, { message: "la contraseña debe tener al menos 6 caracteres" })
})