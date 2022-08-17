// Using ES6 imports
import mongoose from "mongoose";

export default () => {
  return mongoose.connect(
    "mongodb+srv://wojtek1702:eSYw9n1kafIUSuCU@cluster0.o3xtl.mongodb.net/library",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
