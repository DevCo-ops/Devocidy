import mongoose from "mongoose";

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection.db;
  }

  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    poolSize: 10,
  });
}

export default dbConnect;
