import express, { NextFunction, Request, Response } from 'express';
import router from './routes/v1';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

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
