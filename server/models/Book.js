import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: String,
  genre: String,
});

const BookModel = mongoose.model("book", BookSchema);

export default BookModel;
