import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      genre
      author {
        name
        age
      }
    }
  }
`;

export const GET_BOOK = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      title
      genre
      author {
        name
        books {
          title
          genre
        }
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
