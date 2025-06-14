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

// Sessions
// app.use(
//   session({
//     name: "sid",
//     secret: process.env.SESSION_SECRET || "supersecret",
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({
//       mongoUrl: process.env.MONGO_URI,
//     }),
//     cookie: {
//       httpOnly: true,
//       maxAge: 1000 * 60 * 60 * 24, // 1 day
//       sameSite: "lax",
//       secure: false, // Set to true if using HTTPS
//     },
//   })
// );

// Routes
app.use("/api/auth/", authRoutes);

app.get("/",(req,res)=>{
    res.send({msg:"Hellow MF"})
})
// app.use("/api/users", userRoutes);
// app.use("/api/chats", chatRoutes);
// app.use("/api/messages", messageRoutes);

export default app;

