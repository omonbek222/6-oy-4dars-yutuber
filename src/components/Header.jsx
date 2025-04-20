import React, { useState } from "react";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">YouTube Clone</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          className="p-2 rounded"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </header>
  );
}

export default Header;
