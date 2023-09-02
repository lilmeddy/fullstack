import express from "express";
import env from "dotenv";
import cors from "cors"
import {connectDB} from "./database/connectDB.js";
import { userRoutes } from "./routes/userRoutes.js";

env.config();
const app = express();

app.use(cors({origin:"*"}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoutes)

connectDB()
app.listen(12000, ()=>{
    
    console.log("app is listening at port 12000");
})