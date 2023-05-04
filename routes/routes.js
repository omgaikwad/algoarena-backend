import express from "express";
import {
  getProblems,
  getSingleProblem,
} from "../controller/problem-controller.js";
import { createNewUser, loginUser } from "../controller/user-controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the algo arena API");
});

// Problems route
router.get("/problems", getProblems);

// Get Single Problem
router.get("/problem/:problemId", getSingleProblem);

// router.post("/add-problem", addProblem);

// signup route
router.post("/signup", createNewUser);

// login route
router.post("/login", loginUser);

export default router;
