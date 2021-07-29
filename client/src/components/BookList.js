import {
  useQuery,
  useMutation,
} from "@apollo/client";
import BookDetails from "./BookDetails";
import { getBooksQuery, deleteBookMutation } from "../queries/queries";
import { useState } from "react";

function BookList() {
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [deleteBookMut,] = useMutation(deleteBookMutation);

  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleDeleteClick = (bookId) => {
    if (bookId === selectedBookId) {
      setSelectedBookId(null);
    }
    deleteBookMut({
      variables: {
        bookId,
      },
      refetchQueries: [{ query: getBooksQuery }]
    }).catch((err) => console.log({ err }))
  };

  return (
    <div className="book_list">
      <div className="book_list_wrapper">
        <ul className="list">
          {data.books.map(({ id, name }) => (
            <li key={id} className="list__item">
              <p className="list__text" onClick={() => setSelectedBookId(id)}>{name}</p>
              <div className="list__pad" />
              <p className="list__delete" onClick={() => handleDeleteClick(id)}>X</p>
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
