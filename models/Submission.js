import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true,
    enum: ["cpp"],
  },
  filepath: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
  },
  startedAt: {
    type: Date,
  },
  completedAt: {
    type: Date,
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "success", "error"],
  },
  output: {
    type: String,
  },
  verdict: {
    type: String,
  },
  userId: {
    type: String,
  },
  problemId: {
    type: String,
  },
});

const Submission = mongoose.model("Submission", SubmissionSchema);

export default Submission;
