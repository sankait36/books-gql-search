import {
  useQuery,
  useMutation,
} from "@apollo/client";
import { useState } from "react";
import { getAuthorsQuery, addBookMutation, getBooksQuery } from "../queries/queries";

function AddBook() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [addBookMut,] = useMutation(addBookMutation);

  const { loading, error, data } = useQuery(getAuthorsQuery);

  const handleSubmitComplete = (e) => {
    e.preventDefault();
    addBookMut({
      variables: {
        name,
        genre,
        authorId,
      },
      refetchQueries: [{ query: getBooksQuery }]
    }).catch((err) => console.log({ err }))
  }

  if (loading) return <p>Loading Authors...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <form className="add_book" onSubmit={handleSubmitComplete}>
      <h2 className="add_book--header">Add a book</h2>
      <div className="field">
        <label className="label">Book Name:</label>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label className="label">Genre:</label>
        <input 
          className="input"
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="field">
        <label className="label">Author:</label>
        <select className="input" defaultValue="" onChange={(e) => setAuthorId(e.target.value)}>
          <option value="" disabled>Select an author</option>
          {data.authors.map(({ name, id }) => (
            <option value={id} key={id}>{name}</option>
          ))}
        </select>
      </div>
      <button className="button" type="submit">Add</button>
    </form>
  );
}

export default AddBook;