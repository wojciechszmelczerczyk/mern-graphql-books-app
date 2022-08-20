import "../css/index.css";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_BOOK, GET_AUTHORS, GET_BOOKS } from "../graphql/queries.js";
import { useState } from "react";

function CreateBook() {
  const { loading, error, data } = useQuery(GET_AUTHORS);
  const [addBook] = useMutation(ADD_BOOK);
  const [bookTitle, setBookTitle] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [bookAuthorId, setBookAuthorId] = useState("");

  if (error) return <p>Error :</p>;
  if (loading) return <p>Loading...</p>;

  const handleForm = (e) => {
    e.preventDefault();
    addBook({
      variables: {
        input: {
          title: bookTitle,
          genre: bookGenre,
          authorId: bookAuthorId,
        },
      },
      refetchQueries: [{ query: GET_BOOKS }],
    });
  };

  return (
    <form onSubmit={handleForm}>
      <div>
        <label>Book name: </label>
        <input type='text' onChange={(e) => setBookTitle(e.target.value)} />
      </div>
      <div>
        <label>Genre: </label>
        <input type='text' onChange={(e) => setBookGenre(e.target.value)} />
      </div>
      <div>
        <select onChange={(e) => setBookAuthorId(e.target.value)}>
          <option>Select author</option>
          {data.authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default CreateBook;
