import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("Connection to Database Successfully");
  } catch (error) {
    console.log("Error Connecting to Database", error.message);
  }
};

export default connectToMongo;
