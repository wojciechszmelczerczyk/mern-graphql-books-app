import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: String,
  genre: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
  },
});

const BookModel = mongoose.model("book", BookSchema);

export default BookModel;
