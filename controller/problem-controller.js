import Problem from "../models/Problem.js";

export const getProblems = async (req, res) => {
  try {
    const problems = await Problem.find();
    res.status(200).json(problems);
  } catch (error) {
    console.log("error in get problems controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getSingleProblem = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.problemId);
    res.status(200).json(problem);
  } catch (error) {
    console.log("error in get single problem controller", error.message);
    res.status(500).json({ message: error.message });
  }
};
