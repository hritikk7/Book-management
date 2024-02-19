import React, { useState } from "react";

function BookForm() {
  const [book, setBook] = useState({
    bookname: "bookname",
    author: "author",
    quantity: "quantity",
    price: "price",
    date: "date",
  });

  return (
    <div>
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
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="bookName"
                      name="bookName"
                      type="text"
                      className="
                        focus:borer-rose-600 peer h-10
                        w-full border-b-2 border-gray-300
                      text-gray-900 placeholder-transparent
                        focus:outline-none"
                      placeholder=" Book Name"
                    />
                    <label
                      htmlFor="bookName"
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
                      autoComplete="off"
                      id="bookAuthor"
                      name="bookAuthor"
                      type="text"
                      className="
                        focus:borer-rose-600 peer h-10
                        w-full border-b-2 border-gray-300
                      text-gray-900 placeholder-transparent
                        focus:outline-none"
                      placeholder="Book Author"
                    />
                    <label
                      htmlFor="bookAuthor"
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
    </div>
  );
}

export default BookForm;
