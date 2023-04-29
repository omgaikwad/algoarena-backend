import mongoose from "mongoose";

const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
    });
    console.log("db connected successfuly");
  } catch (error) {
    console.log("error in db connection", error.message);
  }
};
