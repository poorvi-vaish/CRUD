import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("Connected to MongoDB");
    return;
  }
  catch (err) {
    console.error(err);
    return;
  } 
}

export default connect;
