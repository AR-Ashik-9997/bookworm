import React, { useState } from 'react';

const FilterForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');

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
    <div className="flex flex-col items-center">
      <label className="mb-2">Filter by:</label>
      <div className="flex flex-col sm:flex-row">
        <label className="mr-2">
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          Option 2
        </label>
      </div>
      <button
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg"
        onClick={handleFilterSubmit}
      >
        Filter
      </button>
    </div>
  );
};

export default FilterForm;
