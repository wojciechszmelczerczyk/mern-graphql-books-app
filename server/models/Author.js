import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  name: String,
});

const AuthorModel = mongoose.model("author", AuthorSchema);

export default AuthorModel;
