import React from "react";
import Book from "./Book";
function Dashboard({ books, setBooks }) {
  // console.log("books in Dashboard", books);
  // console.log("books  data", books[0].author);
  const handleBookRemove = (id) => {
    console.log("id of the book", id);
    const newBookList = books.filter((book) => book.id !== id);
    console.log("newBookList", newBookList);
    setBooks(newBookList);
    localStorage.clear();
  };

  return (
    <>
      <div className="flex  flex-col">
        <div className=" flex w-screen justify-start">
          <span className="ml-20 mt-14 text-5xl  font-bold">Booklist</span>
        </div>
      </div>
      <div className="mx-20 grid h-full grid-cols-4 gap-12">
        {books && books.length > 0 ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleBookRemove={handleBookRemove} />
          ))
        ) : (
          <h3>No Books in inventory</h3>
        )}
      </div>
    </>
  );
}

export default Dashboard;
