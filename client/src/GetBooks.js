import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
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

function GetBooks() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map((book) => (
    <div className='book' key={book.title}>
      <p>{book.genre}</p>
    </div>
  ));
}

export default GetBooks;
