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
    <div className="book_list">
      <div className="book_list_wrapper">
        <ul className="list">
          {data.books.map(({ id, name }) => (
            <li
              key={id}
              onClick={() => setSelectedBookId(id)}
              className="list__item">
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="book_details_wrapper">
        <BookDetails
          selectedBookId={selectedBookId}
        />
      </div>
    </div>
  );
}

export default BookList;
