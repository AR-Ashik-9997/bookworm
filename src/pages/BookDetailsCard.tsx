import React from "react";
import readingBook from "../assets/images/readingbook.png";
interface Book {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string[];
}

const BookDetailsCard: React.FC<Book> = ({
  title,
  author,
  genre,
  publicationDate,
  reviews,
}) => {
  return (
    <section className="py-16 lg:pt-48">
      <div className="container mx-auto px-4 max-w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              className=" w-full h-full mx-auto mr-4"
              src={readingBook}
              alt="Card"
            />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-lg font-medium text-gray-600 mb-2">
              Author: {author}
            </p>
            <p className="text-lg font-medium text-gray-600 mb-2">
              Genre: {genre}
            </p>
            <p className="text-lg font-medium text-gray-600 mb-2">
              Publication Date: {publicationDate}
            </p>
            <div className="mb-2">
              <h3 className="text-lg font-semibold mb-1">Reviews:</h3>
              <ul className="list-disc list-inside">
                {reviews.map((review, index) => (
                  <li key={index} className="text-gray-700">
                    {review}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center items-center gap-4 pt-16">
              <button className="px-4 py-2 rounded-xl text-white bg-teal-600">Edit Book</button>
              <button className="px-4 py-2 rounded-xl text-white bg-red-600">Delete Book</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsCard;
