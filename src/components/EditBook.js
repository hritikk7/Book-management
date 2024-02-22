import React from "react";
import BookForm from "./BookForm";
import { useParams } from "react-router-dom";

export default function EditBook({books, setBooks}) {
  const { bookId } = useParams();
  const bookToEdit = books.find((book)=> book.id == bookId)
  console.log("id in the edit book", bookToEdit);

  const handleOnSubmit = (book) =>{
    const filteredBook = books.filter((book)=>(
        book.id !== bookId
    ))

    console.log("filteredBook", filteredBook);
  }


  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
}
