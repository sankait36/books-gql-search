import React from 'react'
import AddBook from './AddBook'
import AddAuthor from './AddAuthor'

const BookFormsContainer = () => {
  return (
    <div className="book-forms">
      <AddBook />
      <AddAuthor />
    </div>
  )
}

export default BookFormsContainer;
