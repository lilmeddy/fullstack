import { signup } from "../controllers/userController.js";
import express from "express"

const userRoutes = express.Router()

userRoutes.post("/signup", signup);

export {userRoutes}