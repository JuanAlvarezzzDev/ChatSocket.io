import express from "express";
import logger from "morgan";
import { Server } from "socket.io";
import {createServer} from "node:http";

const port = process.env.PORT ?? 3000;
const app = express();
const server = createServer(app); // creando servidor http
const io = new Server(server)

io.on('connection', (socket)=>{
  console.log("Usuario conectado")

  socket.on('disconnect', ()=>{
    console.log("Usuario Desconectado")
  })

  socket.on("chat mensaje", (msg)=>{
    console.log('mensaje:', msg)
  })
})

app
  .use(logger("dev"))
  .get("/", (_, res) => {
    res.sendFile(process.cwd() + '/client/index.html')
  });


 server.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
  });
