import express from "express";
import {
  create,
  findAll,
  searchByName,
  searchByWilaya,
} from "../Controllers/medecins.controller.js";

const doctorsRouter = express.Router();
// Create a new Booking
doctorsRouter.post("/doctors", create);
doctorsRouter.get("/doctors", findAll);
doctorsRouter.get("/doctors/byname/:name", searchByName);
doctorsRouter.get("/doctors/bywilaya/:wilaya", searchByWilaya);

export default doctorsRouter;
