// mock data

const books = [
  {
    id: "1",
    title: "1984",
    author: "George Orwell",
  },
  {
    id: "2",
    title: "Brave New World",
    author: "Aldous Huxley",
  },
  {
    id: "3",
    title: "Lord Of The Rings",
    author: "J.R.R. Tolkien",
  },
];

const authors = [
  {
    id: "1",
    name: "George Orwell",
    books: ["1984"],
  },
  {
    id: "2",
    name: "Aldous Huxley",
    books: ["Brave New World"],
  },
  {
    id: "3",
    name: "J.R.R. Tolkien",
    books: ["Lord Of The Rings"],
  },
];

const resolvers = {
  Query: {
    books() {
      return books;
    },
    book(_, args, ___) {
      return books.find((book) => book.id === args.id);
    },
    authors() {
      return authors;
    },
    author(_, args, ___) {
      return authors.find((author) => author.id === args.id);
    },
  },
  Mutation: {
    newBook(_, { input }) {
      books.push(input);
      return input;
    },
  },
};

export { resolvers };
