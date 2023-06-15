import express from "express";
import { LanguageController } from "./controller/language.controller";
import db from "./config/dbConnect";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3333;

console.log("PORT ==>", process.env.SERVER_PORT);

app.use(express.json());
db.on("error", console.log.bind(console, "Erro de conexão"));

db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso !!! 🚀");
});

app.get("/", (req, res) => {
  res.status(200).send("Hello docker !!!");
  //LanguageController.listLanguages(req, res);
});

app.listen(port, () => console.log(`Server running at port ${port} 🥷`));
