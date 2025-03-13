import React from "react";
import { Outlet } from "react-router-dom";
import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

export default function MainContent() {
  return (
    <div className="grid grid-cols-[1fr_15fr_6fr] w-full h-full bg-black px-2 gap-2 overflow-hidden">
      {/* Left Section */}
      <div className="relative bg-gray-800 rounded-md overflow-hidden">
        <div className="overflow-y-auto h-full custom-scrollbar">
          <Left />
        </div>
      </div>

      {/* Center Section */}
      <div className="relative pl-8 bg-gray-800 rounded-md overflow-hidden">
        <div className="overflow-y-auto h-full custom-scrollbar">
          <Center />

          <div className="py-4 overflow-x-hidden">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative bg-gray-800 rounded-md overflow-hidden">
        <div className="overflow-y-auto h-full custom-scrollbar">
          <Right />
        </div>
      </div>
    </div>
  );
}
