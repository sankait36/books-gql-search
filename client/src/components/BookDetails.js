import {
  useQuery,
} from "@apollo/client";

import { getBookByIdQuery } from "../queries/queries";

function BookDetails({
  selectedBookId,
}) {
  const { loading, error, data } = useQuery(getBookByIdQuery, {
    variables: {
      id: selectedBookId,
    }
  });
  if (selectedBookId) {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    if (data.book) {
      return (
        <div className="book-details">
          <p>Name: {data.book.name}</p>
          <p>Author: {data.book.author.name}</p>
          <p>Genre: {data.book.genre}</p>
        </div>
      )
    }
  }
  return (
    <div>
      Please select a book
    </div>
  )
}

export default BookDetails;
