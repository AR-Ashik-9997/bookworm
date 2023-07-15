import React from "react";
import { Link } from "react-router-dom";
interface CardBooksProps {
  data: string;
}

const CardBooks: React.FC<CardBooksProps> = () => {
  return (
    <section>
      <Link to="/#">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full">
          <img
            className="w-full h-48 object-cover rounded-lg mb-4"
            src="path/to/image1.jpg"
            alt="Card Image"
          />
          <h2 className="text-lg font-semibold">Card 1</h2>
          <p className="text-gray-500">Description 1</p>
        </div>
      </Link>
    </section>
  );
};

export default CardBooks;
