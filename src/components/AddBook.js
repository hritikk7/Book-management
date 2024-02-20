import React from "react";
import BookForm from "./BookForm";

function AddBook({history, books, setBooks}) {

  const handleOnSubmit = (book) =>{
    console.log(book);
    setBooks([book, ...books])
    history.push('/')
  }
  return (
    <>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </>
  );
}

export default AddBook;
