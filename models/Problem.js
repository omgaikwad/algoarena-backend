import mongoose from "mongoose";

const ProblemSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  difficulty: { type: String, enum: ["easy", "medium", "hard"] },
  input: { type: String },
  output: { type: String },
  constraints: { type: String },
  timelimit: { type: Number, default: 5.0 },
  createdBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  testcases: [
    {
      input: { type: String },
      output: { type: String },
      sample: { type: Boolean },
      explanation: { type: String },
    },
  ],
});

const Problem = mongoose.model("Problem", ProblemSchema);

export default Problem;
