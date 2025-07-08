import 'dotenv/config';

import http from "http";
import app from "./app.js";
import {Server} from "socket.io"
// import registerSocketHandeler from 


const PORT = process.env.PORT || 3000;

// Create server
const server = http.createServer(app);



const io = new Server(server,{
 cors:{
  origin:"*",
  method:['GET','POST']
 }
})



// Handle sockets
// socketHandler(io);


server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
