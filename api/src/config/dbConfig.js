import mongoose from "mongoose";

const createConnection = () => {
  const connectStr = process.env.MONGO_URL;
  try {
    const result = mongoose.connect(connectStr);
    return result;
  } catch (error) {
    console.log(error);
  }
};
