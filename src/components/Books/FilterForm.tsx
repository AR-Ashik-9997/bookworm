import React, { useState } from "react";

const FilterForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleFilterSubmit = () => {
    // Perform filtering and post filtered data to the database
    console.log(selectedOption);
  };

  const filterAndPostData = (selectedOption: string) => {
    // Implement your filtering logic here based on the selected option
    // Post the filtered data to the database
    // Example:
    // fetch('/your-server-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ selectedOption }),
    // })
    //   .then((response) => {
    //     // Handle the response from the server
    //     // You can perform additional actions here if needed
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };

  return (
    <section className="p-4">
      <div>
        <h1 className="mb-2 text-xl lg:text-base xl:text-xl">Filter by Genre</h1>
        <div className="flex flex-col">
          <label className="text-xl lg:text-base xl:text-xl">
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            Option 1
          </label>
          <label className="text-xl lg:text-base xl:text-xl">
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            Option 2
          </label>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="mb-2 text-xl lg:text-base xl:text-xl">Filter by publication year</h1>
        <div className="flex flex-col">
          <label className="text-xl lg:text-base xl:text-xl">
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            Option 1
          </label>
          <label className="text-xl lg:text-base xl:text-xl">
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            Option 2
          </label>
        </div>
      </div>
    </section>
  );
};

export default FilterForm;
