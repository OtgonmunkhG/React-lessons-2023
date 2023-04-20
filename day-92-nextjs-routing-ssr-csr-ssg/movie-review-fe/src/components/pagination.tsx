import React, { useEffect, useState } from "react";

export default function Pagination({ setMovie }: any): JSX.Element {
  const [count, setCount] = useState(1);
  const ALL_URL = "http://localhost:8181/movies/pagination";
  // const [movie, setMovie] = useState([]);
  // async function fetchedAll(url: string) {
  //   const response = await fetch(url);
  //   const result = await response.json();
  //   setMovie(result);
  //   console.log(movie);
  // }

  // useEffect(() => {
  //   fetchedAll(ALL_URL);
  // }, []);

  function handleClick() {
    setCount(count + 1);
    fetchData(count + 1);
  }

  const fetchData = async (cnt: number) => {
    const response = await fetch(ALL_URL + `?page=${cnt}&moviesPerPage=18`);
    const result = await response.json();
    setMovie(result);
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div className="mx-auto">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setCount(count - 1);
                fetchData(count - 1);
              }}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {count}
            </a>

            <button
              onClick={handleClick}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
