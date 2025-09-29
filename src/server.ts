import express from "express";
import usersRouter from "./controllers/users";
const app = express();

app.use(express.json());

app.use("/", usersRouter);

app.listen(3000, () => {
  console.log("Servidor rodando!!");
});
