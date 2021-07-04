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
    console.log(data)
    return (
      <div className="book-details">
        <p>Name: {data.book.name}</p>
      </div>
    );
  }
  return (
    <div>
      Please select a book
    </div>
  )
}

export default BookDetails;
