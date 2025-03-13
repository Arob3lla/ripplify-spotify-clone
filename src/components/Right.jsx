import React from "react";

export default function Right() {
  return (
    <div>
      <div className="h-full bg-gray-800 rounded-md text-white">
        <div className="px-3 pb-3">
          <div className="pt-4 pb-3 flex justify-between sticky top-0 bg-gray-800">
            <div>
              <span className="font-bold cursor-pointer">Song Name</span>
            </div>
            <div className="flex gap-2">
              <div className="flex justify-center items-center p-1 hover:bg-gray-700 rounded-full">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex justify-center items-center px-2 hover:bg-gray-700 rounded-full">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/img/spidey.png"
              className="rounded-lg w-full h-96"
              alt="#"
            />
          </div>
          <div className="py-4 flex justify-between">
            <div className="cursor-pointer">
              <h2 className="font-bold text-xl">Song Name</h2>
              <span>Artist, ft (Artists)</span>
            </div>
            <div className="flex items-center">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" bg-gray-700 rounded-lg overflow-hidden cursor-pointer">
              <div>
                <img src="/img/spidey.png" className=" w-full h-72" alt="#" />
                <div className="relative top-0">
                  {/* <h3 className="font-bold">About the artist </h3> */}
                </div>
              </div>
              <div className="py-4 px-4 pb-6 flex flex-col gap-2">
                <h3 className="font-bold">Artist Name</h3>
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-400 ">Details</h3>
                  <button className="border-2 rounded-full px-3">Follow</button>
                </div>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                  sapiente?
                </p>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-lg px-4 py-4 flex flex-col gap-3">
              <div className="flex justify-between items-end">
                <h2 className="font-bold">Credits</h2>
                <h2 className="text-gray-400 font-bold text-sm">Show all</h2>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col ">
                  <h3>Artist Name</h3>
                  <h3 className="text-gray-400 text-sm">Details</h3>
                </div>
                <button className="border-2 rounded-full px-3">Follow</button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <h3>Artist Name</h3>
                  <h3 className="text-gray-400 text-sm">Details</h3>
                </div>
                <button className="border-2 rounded-full px-3">Follow</button>
              </div>
              <div>
                <div className="flex flex-col">
                  <h3>Artist Name</h3>
                  <h3 className="text-gray-400 text-sm">Details</h3>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-lg px-4 py-4 flex flex-col gap-3">
              <div className="flex justify-between items-end">
                <h2 className="font-bold">Next in queue</h2>
                <h2 className="text-gray-400 font-bold text-sm">Open queue</h2>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/img/spidey.png"
                  className="rounded-lg w-14 h-14"
                  alt="#"
                />
                <div className="flex flex-col ">
                  <h3>Song Name</h3>
                  <h3 className="text-gray-400 text-sm font-bold">Details</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
