import { Router } from "express";
import { authRequire } from "../middlewares/validateToken.js";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/task.controllers.js";

const router = Router()

router.get("/tasks", authRequire, getTasks );
router.get("/tasks/:id", authRequire , getTask)
router.post("/tasks", authRequire , createTask)
router.delete("/tasks/:id", authRequire , deleteTask)
router.put("/tasks/:id", authRequire, updateTask)

export default router;