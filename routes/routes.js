import express from "express";
import {
  getProblems,
  getSingleProblem,
} from "../controller/problem-controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the algo arena API");
});

// Problems route
router.get("/problems", getProblems);

// Get Single Problem
router.get("/problem/:problemId", getSingleProblem);

// router.post("/add-problem", addProblem);

export default router;
