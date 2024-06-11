import { Router } from "express";
import { logout, loguin, profile, register, verifyToken } from "../controllers/auth.controller.js";
import { authRequire } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loguinSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router() ;

router.post("/register" ,validateSchema(registerSchema), register) ;
router.post("/loguin" , validateSchema(loguinSchema), loguin) ;
router.post ("/logout" , logout) ;
router.get("/verify"  , verifyToken )
router.get("/profile" , authRequire , profile)


export default router ;