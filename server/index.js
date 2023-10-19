import express from "express";
import logger from "morgan";
import { Server } from "socket.io";
import {createServer} from "node:http";

const port = process.env.PORT ?? 3000;
const app = express();
const server = createServer(app); // creando servidor http

app
  .use(logger("dev"))
  .get("/", (_, res) => {
    res.sendFile(process.cwd() + '/client/index.html')
  })
  .listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
