import express from "express";
const port = process.env.PORT ?? 3000;
const app = express();

app
.get("/", (_, res) => {
  res.send("<h1> Esto es el chat </h1>");
  })
.listen(port, ()=>{
  console.log(`Servidor corriendo en el puerto ${port}`)
});
