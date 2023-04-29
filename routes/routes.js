import express from "express";

const router = express.Router();

// Problems route
router.get("/problems", getProblems);

// Get Single Problem
router.get("/problem/:problemId", getSingleProblem);
