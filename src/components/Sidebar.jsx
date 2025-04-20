import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-60 p-4">
      <ul>
        <li className="py-2">
          <Link to="/">Home</Link>
        </li>
        <li className="py-2">
          <Link to="/">Trending</Link>
        </li>
        <li className="py-2">
          <Link to="/">Subscriptions</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
