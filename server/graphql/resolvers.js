import Author from "../models/Author.js";
import Book from "../models/Book.js";
import mongoose from "mongoose";

const resolvers = {
  Query: {
    async books() {
      return await Book.find();
    },
    async book(_, args) {
      return await Book.findById(args.id);
    },
    async authors() {
      return await Author.find();
    },
    async author(_, args) {
      return await Author.findById(args.id);
    },
  },

  Book: {
    async author(book) {
      return await Author.findById(book.author);
    },
  },

  Author: {
    async books(author) {
      return await Book.find({ author: author._id });
    },
  },

  Mutation: {
    async newBook(_, { input }) {
      const newBook = await Book.create({
        input,
      });
      return newBook;
    },
    async newAuthor(_, { input }) {
      const newAuthor = await Author.create(input);
      return newAuthor;
    },
  },
};

export { resolvers };
