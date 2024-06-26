import mongoose from "mongoose";
export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database!");
  } catch (err) {
    console.log("Some error occurred while connecting to database:", err);
  }
};

dbConnection();