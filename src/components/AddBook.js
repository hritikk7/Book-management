import React from "react";
import BookForm from "./BookForm";
import { useNavigate } from "react-router-dom";

function AddBook({books, setBooks}) {
  const navigate = useNavigate();
  const handleOnSubmit = (book) =>{
    setBooks([book, ...books])
    navigate("/");
  }
  return (
    <>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </>
  );
}

export default AddBook;
