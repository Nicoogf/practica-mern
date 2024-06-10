import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequire = (req, res, next) => {
    const { token } = req.cookies
    if (!token) res.status(401).json({ message: "No se encontro token, autorizacion denegada" })
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(404).json({ message: "token invalido" })
        req.user = user ;
    })
    next()
}