import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import doctorsRouter from "./Routes/routes.js";
// CONSTS

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


// MIDDLWARES

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// DATABASE CONNECTION

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("error", function () {
  console.log("Could not connect to the database. Exiting now...");
  process.exit();
});
mongoose.connection.once("open", function () {
  console.log("Successfully connected to the database");
});

// APP ROUTES

app.use("/", doctorsRouter)

// APP LISTENER

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`);
});
