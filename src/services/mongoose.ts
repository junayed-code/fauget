import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI + "");
    console.log("Connected to the MongoDB");
  } catch (error) {
    console.error("💥DB CONNECTION ERROR ", error);
  }
};
