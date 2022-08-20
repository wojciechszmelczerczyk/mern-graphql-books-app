import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";

function App() {
  return (
    <div className='main'>
      <h1>Books</h1>
      <BookList />
      <CreateBook />
    </div>
  );
}

export default App;
