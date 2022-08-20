import "../css/index.css";
import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../graphql/queries.js";

function CreateBook({ bookId }) {
  const { data, loading, error } = useQuery(GET_BOOK, {
    variables: { id: bookId },
  });

  if (error) return <p>Error :</p>;

  if (loading) return <p>Loading...</p>;

  if (data) {
    return (
      <div>
        <h3>Book title:</h3>
        <p>{data.book.title}</p>
        <h3>Genre:</h3>
        <p>{data.book.genre}</p>
        <h3>Author:</h3>
        <p>{data.book.author.name}</p>
        <h3>Author other books:</h3>
        <ul className='otherBooks'>
          {data.book.author.books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CreateBook;
