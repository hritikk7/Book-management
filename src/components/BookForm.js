import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function BookForm( props ) {
  const [book, setBook] = useState({
    bookname: props.bookname ? props.book.bookname : "",
    author: props.author ? props.book.author : "",
    quantity: props.quantity ? props.book.quantity : "",
    price: props.price ? props.book.price : "",
    date: props.date ? props.book.date : "",
  });

  const [errorMsg, setErrorMsg] = useState("")

  const {bookname, author, price, quantity} = book
  console.log("book in the bookform",  props  );
  const handleOnSubmit = (e) => {
    let errorMsg = ''
    e.preventDefault();
    const values = [bookname, author, price, quantity];
    const allFields = values.every((field) =>{
      let val = `${field}`
      return val =='' || val !== '0'
    })
    
    if(allFields){
      const newBook = {
        id : uuidv4(),
        bookname,
        author,
        price,
        quantity,
        date : new Date()
      }
      console.log("new Book", newBook);
      props.handleOnSubmit(newBook)
    }else{
      errorMsg = "Fill all the fields"
    }
    setErrorMsg(errorMsg)
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("name, value", name, value);
    switch (name) {
      case "quantity":
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;
      case "price":
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;
    }
  };

  console.log("book in book form", book);
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
        <div className="relative py-3 sm:mx-auto sm:max-w-xl">
          <div className="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
          <div className="relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="mx-auto max-w-md">
              <div>
                <h1 className="text-2xl font-bold">Book Form</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div
                  className="space-y-4 py-8 text-base leading-6
                 text-gray-700 sm:text-lg
                  sm:leading-7"
                >
                  {errorMsg && <h3>{errorMsg}</h3>}
                  <div className="relative">
                    <input
                      onChange={handleInputChange}
                      autoComplete="off"
                      id="bookname"
                      name="bookname"
                      type="text"
                      className="
                        focus:borer-rose-600 peer h-10
                        w-full border-b-2 border-gray-300
                      text-gray-900 placeholder-transparent
                        focus:outline-none"
                      placeholder=" Book Name"
                    />
                    <label
                      htmlFor="bookname"
                      className="
                        peer-placeholder-shown:text-gray-440 absolute -top-3.5 left-0
                        text-sm text-gray-600 
                        transition-all peer-placeholder-shown:top-2
                        peer-placeholder-shown:text-base peer-focus:-top-3.5
                        peer-focus:text-sm peer-focus:text-gray-600"
                    >
                      Book Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      onChange={handleInputChange}
                      autoComplete="off"
                      id="author"
                      name="author"
                      type="text"
                      className="
                        focus:borer-rose-600 peer h-10
                        w-full border-b-2 border-gray-300
                      text-gray-900 placeholder-transparent
                        focus:outline-none"
                      placeholder="Book Author"
                    />
                    <label
                      htmlFor="author"
                      className="
                        peer-placeholder-shown:text-gray-440 absolute -top-3.5 left-0
                        text-sm text-gray-600 
                        transition-all peer-placeholder-shown:top-2
                        peer-placeholder-shown:text-base peer-focus:-top-3.5
                        peer-focus:text-sm peer-focus:text-gray-600"
                    >
                      Book Author
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      onChange={handleInputChange}
                      autoComplete="off"
                      id="quantity"
                      name="quantity"
                      type="number"
                      className="
                        focus:borer-rose-600 peer h-10
                        w-full border-b-2 border-gray-300 text-gray-900 
                        placeholder-transparent focus:outline-none"
                      placeholder="Quantity"
                    />
                    <label
                      htmlFor="quantity"
                      className="peer-placeholder-shown:text-base] peer-placeholder-shown:text-gray-440 absolute -top-3.5
                        left-0 text-sm
                        text-gray-600 transition-all 
                        peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                    >
                      Quantity
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      onChange={handleInputChange}
                      autoComplete="off"
                      id="price"
                      name="price"
                      type="number"
                      className="
                        focus:borer-rose-600 peer h-10
                        w-full border-b-2 border-gray-300 text-gray-900 
                        placeholder-transparent focus:outline-none"
                      placeholder="Price"
                    />
                    <label
                      htmlFor="price"
                      className="peer-placeholder-shown:text-base] peer-placeholder-shown:text-gray-440 absolute -top-3.5
                        left-0 text-sm
                        text-gray-600 transition-all 
                        peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                    >
                      Price
                    </label>
                  </div>

                  <div className="relative">
                    <button className="rounded-md bg-cyan-500 px-2 py-1 text-white">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default BookForm;
