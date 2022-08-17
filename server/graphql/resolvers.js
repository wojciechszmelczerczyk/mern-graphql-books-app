import Author from "../models/Author.js";
import Book from "../models/Book.js";

const resolvers = {
  Query: {
    async books() {
      return await Book.find();
    },
    async book(_, args, ___) {
      return await Book.findById(args.id);
    },
    async authors() {
      return await Author.find();
    },
    async author(_, args, ___) {
      return await Author.findById(args.id);
    },
  },
  Mutation: {
    async newBook(_, { input }) {
      const newBook = await Book.create(input);
      return newBook;
    },
  },
};

export { resolvers };
