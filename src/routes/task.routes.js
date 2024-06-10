import { Router } from "express";
import { authRequire } from "../middlewares/validateToken.js";

const router = Router()

router.get("/task" , authRequire ,  (req,res) => res.send("tareas"))

export default router ;