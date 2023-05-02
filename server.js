import express from "express";
import * as dotenv from "dotenv";
import DBconnection from "./database/db.js";
import router from "./routes/routes.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
DBconnection();

app.listen("9000", () => {
  console.log("Server is running on port 9000");
});
