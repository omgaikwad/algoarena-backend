import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createNewUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const findUserByUsername = await User.findOne({ username });
    const findUserByEmail = await User.findOne({ email });

    if (findUserByUsername || findUserByEmail) {
      res.status(400).json({
        message:
          "User already exists with given username or email. Please Login.",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ user }, process.env.JWT_SECRET);

    res.status(201).json({ message: "User created successfully", user, token });
  } catch (error) {
    console.log("error in createNewUser", error.message);

    res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    let user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({
        message: "User not found. Please signup.",
      });
      return;
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      res.status(401).json({
        message: "Invalid credentials. Please try again.",
      });
      return;
    }

    const token = jwt.sign({ user }, process.env.JWT_SECRET);

    if (isPasswordCorrect) {
      res.status(200).json({ message: "Login successful", user, token });
    }
  } catch (error) {
    console.log("error in loginUser", error.message);

    res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
};
