import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Word!");
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
