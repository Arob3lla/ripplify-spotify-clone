import React from "react";
import { NavLink } from "react-router-dom";

export default function Center() {
  // this is the array for pagination
  const Navlinks = [
    {
      name: "All",
      path: "all",
    },
    {
      name: "Songs",
      path: "songs",
    },
    {
      name: "Albums",
      path: "albums",
    },
    {
      name: "Playlists",
      path: "playlists",
    },
    {
      name: "Artists",
      path: "artists",
    },
  ];
  return (
    <div>
      <div className="h-full pt-4 pb-1">
        {/* dynamic pagination */}
        <div className="flex gap-4 align-start ">
          {Navlinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="hover:text-gray-400 rounded-full bg-gray-700 px-3 py-1"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
