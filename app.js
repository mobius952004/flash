import express from "express";

import connectDB from "./config/db.js";
import authRoutes from "./modules/authentication/auth.routes.js"




console.log("ACCESS:", process.env.JWT_ACCESS_SECRET?.slice(0,10));
console.log("REFRESH:", process.env.JWT_REFRESH_SECRET?.slice(0,10));


const app = express();

connectDB()
 
// CORS
// app.use(
//   cors({
//     origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
//     credentials: true,
//   })
// );

// JSON parsing
app.use(express.json());



// Routes
app.use("/api/auth/", authRoutes);

app.get("/",(req,res)=>{
    res.send({msg:"hlo"})
})


export default app;

