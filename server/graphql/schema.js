import { gql } from "apollo-server";

const typeDefs = gql`
  type Book {
    id: ID
    title: String
    genre: String
    author: Author!
  }

  input newBookInput {
    id: ID
    title: String
    genre: String
  }

  type Author {
    id: ID
    name: String
    age: Int
    books: [Book!]
  }

  input newAuthorInput {
    id: ID
    name: String
    age: Int
  }

  type Query {
    books: [Book]!
    book(id: ID!): Book!
    authors: [Author]!
    author(id: ID!): Author!
  }

  type Mutation {
    newBook(input: newBookInput!): Book!
    newAuthor(input: newAuthorInput!): Author!
  }
`;

export { typeDefs };
