// Using ES6 imports
import mongoose from "mongoose";
import { config } from "dotenv";
import root from "app-root-path";
config({ path: `${root.path}/../.env` });

export default () => {
  return mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
