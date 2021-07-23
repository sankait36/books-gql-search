import {
  gql
} from "@apollo/client";

const getBooksQuery = gql`
  query BookList {
    books {
      id
      name
    }
  }
`;

const getBookByIdQuery = gql`
  query BookById($id: ID) {
    book(id: $id) {
      id,
      name,
      genre,
      author {
        id,
        name,
      }
    }
  }
`;

const getAuthorsQuery = gql`
  query AuthorList {
    authors {
      id
      name
    }
  }
`;

const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }
`

const addAuthorMutation = gql`
  mutation AddAuthor($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name
      age
    }
  }
`

const deleteBookMutation = gql`
  mutation DeleteBook($bookId: ID!) {
    deleteBook(id: $bookId) {
      id
      name
    }
  }
`

export {
  getBooksQuery,
  getBookByIdQuery,
  getAuthorsQuery,
  addBookMutation,
  addAuthorMutation,
  deleteBookMutation,
}
