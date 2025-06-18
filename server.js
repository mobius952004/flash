import 'dotenv/config';

import http from "http";
import app from "./app.js";


const PORT = process.env.PORT || 3000;

// Create server
const server = http.createServer(app);

import fs from "fs";
console.log("[CHECK] .env exists? ",
  fs.existsSync(".env") ? "yes" : "no",
  "  cwd =", process.cwd());


// Socket.IO setup
// const io = new SocketServer(server, {
//   cors: {
//     origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
//     credentials: true,
//   },
// });



// Handle sockets
// socketHandler(io);


server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
