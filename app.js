import express from "express";
// import cors from "cors";
import dotenv from "dotenv";
// import session from "express-session";
// import MongoStore from "connect-mongo";
import connectDB from "./config/db.js";
import authRoutes from "./modules/authentication/auth.routes.js"
// import userRoutes from "./modules/user/user.routes.js";
// import chatRoutes from "./modules/chat/chat.routes.js";
// import messageRoutes from "./modules/message/message.routes.js";
import passport from "./config/passport.js";
import { sessionMiddleware } from "./config/session.js";


dotenv.config();

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
    res.send({msg:"Hellow MF"})
})
// app.use("/api/users", userRoutes);
// app.use("/api/chats", chatRoutes);
// app.use("/api/messages", messageRoutes);

export default app;

