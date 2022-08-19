import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
    },
  ],
});

const AuthorModel = mongoose.model("author", AuthorSchema);

export default AuthorModel;
