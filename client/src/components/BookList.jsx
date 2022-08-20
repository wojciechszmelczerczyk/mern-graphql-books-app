import "../css/index.css";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../graphql/queries.js";
import BookDetails from "./BookDetails";
import { useState } from "react";

function GetBooks() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [bookId, setBookId] = useState("");
  if (error) return <p>Error :(</p>;
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='bookList'>
          {data.books.map((book) => (
            <li onClick={() => setBookId(book.id)}>{book.title}</li>
          ))}
        </ul>
      )}
      <BookDetails bookId={bookId} />
    </div>
  );
}

export default GetBooks;
