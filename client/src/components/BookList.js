import {
  useQuery,
} from "@apollo/client";
import BookDetails from "./BookDetails";
import { getBooksQuery } from "../queries/queries";
import { useState } from "react";

function BookList() {
  const [selectedBookId, setSelectedBookId] = useState(null);
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ul className="book_list">
        {data.books.map(({ id, name }) => (
          <li key={id} onClick={() => setSelectedBookId(id)}>{name}</li>
        ))}
      </ul>
      <BookDetails
        selectedBookId={selectedBookId}
      />
    </div>
  );
}

export default BookList;
