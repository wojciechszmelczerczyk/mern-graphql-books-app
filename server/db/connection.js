// Using ES6 imports
import mongoose from "mongoose";
import { config } from "dotenv";

config();

export default () => {
  return mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
