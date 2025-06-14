import http from "http";
// import { Server as SocketServer } from "socket.io";
import { createServer } from "http";
// import dotenv from "dotenv";
import app from "./app.js";
// import connectDB from "./config/db.js";
// import session from "express-session";
import MongoStore from "connect-mongo";
// import sharedSession from "express-socket.io-session";
// import socketHandler from "./sockets/index.js";
import { Mongoose } from "mongoose";

// dotenv.config();

const PORT = process.env.PORT || 3000;

// Create server
const server = http.createServer(app);

// Session setup (same config as app.js to share sessions)
// const sessionMiddleware = session({
//   name: "sid",
//   secret: process.env.SESSION_SECRET || "supersecret",
//   resave: false,
//   saveUninitialized: false,
//   store: MongoStore.create({
//     mongoUrl: process.env.MONGO_URI,
//   }),
//   cookie: {
//     httpOnly: true,
//     maxAge: 1000 * 60 * 60 * 24,
//     sameSite: "lax",
//     secure: false,
//   },
// });

// Apply to Express app
// app.use(sessionMiddleware);

// Socket.IO setup
// const io = new SocketServer(server, {
//   cors: {
//     origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
//     credentials: true,
//   },
// });

// Share session with Socket.IO
// io.use(sharedSession(sessionMiddleware, {
//   autoSave: true,
// }));

// Handle sockets
// socketHandler(io);


server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
