import { gql } from "apollo-server";

const typeDefs = gql`
  type Book {
    id: ID
    title: String
    author: Author
  }

  input newBookInput {
    id: ID
    title: String
  }

  type Author {
    id: ID
    name: String
    books: [Book]
  }

  type Query {
    books: [Book]!
    book(id: ID!): Book!
    authors: [Author]!
    author(id: ID!): Author!
  }

  type Mutation {
    newBook(input: newBookInput!): Book!
  }
`;

export { typeDefs };
