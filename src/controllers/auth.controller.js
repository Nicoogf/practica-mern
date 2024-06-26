import { TOKEN_SECRET } from "../config.js";
import { createAccessToken } from "../libs/jwt.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const userFound = await User.findOne({ email })

        if (userFound) return res.status(400).json(["el usuario ya existe"])

        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: passwordHash
        })

        const userSaved = await newUser.save()
        const token = await createAccessToken({ id: userSaved._id })

        res.cookie("token", token)

        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updateAt: userSaved.updatedAt
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export const loguin = async (req, res) => {
    const { email, password } = req.body
    try {
        const UserFound = await User.findOne({ email })
        if (!UserFound) return res.status(400).json({ message: "Usuario no encontrado" })

        const isMatch = await bcrypt.compare(password, UserFound.password)

        if (!isMatch) return res.status(400).json({ message: "Credenciales incorrectas" })

        const token = await createAccessToken({ id: UserFound._id })

        res.cookie("token", token)

        res.json({
            id: UserFound._id,
            username: UserFound.username,
            email: UserFound.email,
            createdAt: UserFound.createdAt,
            updateAt: UserFound.updatedAt
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if (!userFound) return res.status(400).json({ message: "usuario no encontrado" })
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updateAt: userFound.updatedAt
    })

}

export const verifyToken = async (req, res) => {
    const { token } = req.cookies
    if (!token) return res.status(401).json({ message: "No Autorizado" })
    jwt.verify(token, TOKEN_SECRET, async(err, user) => {
        if(err) return res.status(401).json({message : "No Autorizado"})

        const userFound = await User.findById(user.id)
        if(!userFound) return res.statud(401).json({message: "No Autorizado"})

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        });
    });
};