import "../css/index.css";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphql/queries.js";

function GetBooks() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Books</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.books.map((book) => (
          <ul className='book' key={book.title}>
            <li>{book.title}</li>
          </ul>
        ))
      )}
    </div>
  );
}

export default GetBooks;
