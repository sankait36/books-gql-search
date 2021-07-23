import { useMutation } from "@apollo/client";
import { useState } from "react";
import { getAuthorsQuery, addAuthorMutation } from "../queries/queries";

function AddBook() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);
  const [addAuthorMut,] = useMutation(addAuthorMutation);

  const handleSubmitComplete = (e) => {
    e.preventDefault();
    addAuthorMut({
      variables: {
        name,
        age: Number(age),
      },
      refetchQueries: [{ query: getAuthorsQuery }]
    }).catch((err) => console.log({ err }))
  }

  return (
    <form className="add_author" onSubmit={handleSubmitComplete}>
      <h2 className="add_author--header">Add an author</h2>
      <div className="field">
        <label className="label">Name:</label>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label className="label">Age:</label>
        <input 
          className="input input--number"
          type="number"
          min="1"
          max="100"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button className="button" type="submit">Add</button>
    </form>
  );
}

export default AddBook;