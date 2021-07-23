import BookList from "./components/BookList";
import BookFormsContainer from "./components/BookFormsContainer";

function App() {
  return (
    <div className="main">
      <div className="header">
        <h1>My Reading List</h1>
      </div>
      <div className="content">
        <BookList />
        <BookFormsContainer />
      </div>
    </div>
  );
}

export default App;
