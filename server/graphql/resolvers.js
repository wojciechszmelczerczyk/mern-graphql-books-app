// mock data

const books = [
  {
    title: "1984",
    author: "George Orwell",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
  },
  {
    title: "Lord Of The Rings",
    author: "J.R.R. Tolkien",
  },
];

const authors = [
  {
    name: "George Orwell",
    books: ["1984"],
  },
  {
    name: "Aldous Huxley",
    books: ["Brave New World"],
  },
  {
    name: "J.R.R. Tolkien",
    books: ["Lord Of The Rings"],
  },
];

const resolvers = {
  Query: {
    books() {
      return books;
    },
    authors() {
      return authors;
    },
  },
};

export { resolvers };
