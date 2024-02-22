import React from "react";
import { useNavigate, Link } from "react-router-dom";
function Book({ id, bookname, price, quantity, author, handleBookRemove }) {
  const navigate = useNavigate()

  return (
    <>
      <div className="my-6">
        <article class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
          <div class="rounded-[10px] bg-white p-4  sm:p-6">
            <div class="mt-4 flex flex-wrap gap-1">
              <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                {`Qty : ${quantity}`}
              </span>

              {/* <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                JavaScript
              </span> */}
            </div>
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              Book Title :
            </time>
            <h3 class="mt-0.5 py-4 text-lg font-medium text-gray-900">
              {bookname}
            </h3>
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              Book By : {author}
            </time>
            

            <div className="flex justify-between text-white">
              <Link 
              // onClick={()=>handleEdit(id)}
              to={`/editBook/${id}`}
              class="rounded-lg bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-500 hover:bg-blue-100 hover:text-blue-600">
                Edit
              </Link>
              
              <button className="rounded-lg bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-500 hover:bg-blue-100 hover:text-blue-600"
                onClick={()=>handleBookRemove(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Book;
