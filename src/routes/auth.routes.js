import { Router } from "express";
import { logout, loguin, profile, register } from "../controllers/auth.controller.js";
import { authRequire } from "../middlewares/validateToken.js";

const router = Router() ;

router.post("/register" , register) ;
router.post("/loguin" , loguin) ;
router.post ("/logout" , logout) ;
router.get("/profile" , authRequire ,profile)

export default router ;