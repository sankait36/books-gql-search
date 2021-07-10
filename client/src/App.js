import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div className="main">
      <div className="header">
        <h1>My Reading List</h1>
      </div>
      <div className="content">
        <BookList />
        <AddBook />
      </div>
    </div>
  );
}

export default App;
