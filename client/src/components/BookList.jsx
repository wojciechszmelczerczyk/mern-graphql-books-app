import "../css/index.css";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphql/queries.js";
import BookDetails from "./BookDetails";
import { useState } from "react";

function GetBooks() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [bookId, setBookId] = useState("");
  if (error) return <p>Error :(</p>;
  console.log(bookId);
  return (
    <div>
      <h1>Books</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.books.map((book) => (
          <ul className='book' key={book.title}>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => setBookId(book.id)}
            >
              {book.title}
            </li>
          </ul>
        ))
      )}
      <BookDetails bookId={bookId} />
    </div>
  );
}

export default GetBooks;
