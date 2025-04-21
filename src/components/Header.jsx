
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          YouTube Clone
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/trending" className="text-white hover:text-gray-400">Trending</Link>
          <Link to="/subscriptions" className="text-white hover:text-gray-400">Subscriptions</Link>
          <Link to="/library" className="text-white hover:text-gray-400">Library</Link>
          <Link to="/history" className="text-white hover:text-gray-400">History</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
