import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      genre
      author {
        name
        age
      }
    }
  }
`;

export const GET_AUTHORS = gql`
  query getAuthors {
    authors {
      id
      name
    }
  }
`;

export const ADD_BOOK = gql`
  mutation createBook($input: newBookInput!) {
    newBook(input: $input) {
      title
      genre
    }
  }
`;
