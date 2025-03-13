import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import All from "./components/All";
import Home from "./components/Home";
import Songs from "./components/Songs";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Playlists from "./components/Playlists";
import Playerbar from "./components/Playerbar";
import LikedSongs from "./components/LikedSongs";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="bg-black h-screen grid grid-rows-[auto_1fr_auto]">
      <BrowserRouter>
        {/* Navbar (First Row) */}
        <Navbar />

        {/* MainContent (Second Row) */}
        <Routes>
          <Route path="/" element={<MainContent />}>
            {/* Nested routes */}
            <Route path="home" element={<Home />} />
            <Route path="likedSongs" element={<LikedSongs />} />
            <Route path="all" element={<All />} />
            <Route path="songs" element={<Songs />} />
            <Route path="albums" element={<Albums />} />
            <Route path="playlists" element={<Playlists />} />
            <Route path="artists" element={<Artists />} />
          </Route>
          <Route
            path="*"
            element={
              <div className="text-white text-center m-auto font-bold">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>

        {/* Playerbar (Third Row) */}
        <Playerbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
