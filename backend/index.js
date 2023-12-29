import express from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to MERN social media app");
});
