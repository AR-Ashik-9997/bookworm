import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log(searchTerm);
  };

  //   const sendDataToServer = (searchTerm: string) => {
  //     // Make an HTTP request to your server endpoint
  //     // Here's an example using the Fetch API
  //     fetch("/your-server-endpoint", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ searchTerm }),
  //     })
  //       .then((response) => {
  //         // Handle the response from the server
  //         // You can perform additional actions here if needed
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   };

  return (
    <div className="flex items-center lg:flex-col xl:flex-row gap-2 border p-4">
      <input
        id="searchInput"
        type="text"
        className="rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-yellow-700 bg-white w-full focus:outline-none focus:border-yellow-700 focus:ring-0 border "
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        id="searchButton"
        className="px-4 rounded-xl bg-teal-600 text-white font-bold p-2 -mt-2 md:-mt-0 "
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
