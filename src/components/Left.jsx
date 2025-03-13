import React from "react";
import { Link } from "react-router-dom";

export default function Left() {
  return (
    <div>
      <div className="h-full bg-gray-800 rounded-md flex flex-col items-center px-1">
        <div className="text-white pt-4 pb-2 cursor-pointer sticky top-0 bg-gray-800 w-full flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center w-full h-16 rounded hover:bg-gray-700">
          <Link to="/LikedSongs">
            <img src="/img/spidey.png" className="rounded w-12 h-12" alt="#" />
          </Link>
        </div>

        <div className="flex justify-center items-center w-full h-16 rounded hover:bg-gray-700">
          <img src="/img/spidey.png" className="rounded w-12 h-12" alt="#" />
        </div>
        <div className="flex justify-center items-center w-full h-16 rounded hover:bg-gray-700">
          <img src="/img/spidey.png" className="rounded w-12 h-12" alt="#" />
        </div>
        <div className="flex justify-center items-center w-full h-16 rounded hover:bg-gray-700">
          <img src="/img/spidey.png" className="rounded w-12 h-12" alt="#" />
        </div>
        <div className="flex justify-center items-center w-full h-16 rounded hover:bg-gray-700">
          <img src="/img/spidey.png" className="rounded w-12 h-12" alt="#" />
        </div>
        <div className="flex justify-center items-center w-full h-16 rounded hover:bg-gray-700">
          <img src="/img/spidey.png" className="rounded w-12 h-12" alt="#" />
        </div>
        <div className="flex justify-center items-center w-full h-16 rounded hover:bg-gray-700">
          <img src="/img/spidey.png" className="rounded w-12 h-12" alt="#" />
        </div>
        <div className="flex justify-center items-center w-full h-16 rounded hover:bg-gray-700">
          <img src="/img/spidey.png" className="rounded w-12 h-12" alt="#" />
        </div>
        <div className="flex justify-center items-center w-full h-16 rounded hover:bg-gray-700">
          <img src="/img/spidey.png" className="rounded w-12 h-12" alt="#" />
        </div>
        <div className="flex justify-center items-center w-full h-16 rounded hover:bg-gray-700">
          <img src="/img/spidey.png" className="rounded w-12 h-12" alt="#" />
        </div>
      </div>
    </div>
  );
}
