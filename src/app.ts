import express, { Request, Response } from "express";
import cors from "cors";
import router from "./routes/v1";
import { Model } from "objection";
import knex from "./config/conf";

const app = express();
Model.knex(knex);
app.use(cors({
  origin: "*",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
    message: "It's work!",
  });
});

app.use("/api/v1", router);
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
