import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "It's work!",
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  `Server listening on port ${PORT}...`
});