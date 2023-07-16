/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import readingBook from "../assets/images/readingbook.png";
import { useNavigate, useParams } from "react-router-dom";
import { useSingleBookQuery } from "@/redux/feature/books/bookApi";
import { makeReadableDateTime } from "@/types/globalTypes";

const BookDetailsCard: React.FC = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  const { data, isLoading, error } = useSingleBookQuery(id);
  const handleBookUpdate = (id:string) => {
   navigate(`/update-book/${id}`);
  };
  return (
    <section className="py-16 lg:pt-32">
      <div className="container mx-auto px-4 max-w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              className=" w-3/4 h-full mx-auto mr-4"
              src={readingBook}
              alt="Card"
            />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 w-3/4">
            <h2 className="text-2xl font-bold mb-2">{data?.data.title}</h2>
            <p className="text-lg font-medium text-gray-600 mb-2">
              Author:{data?.data.author}
            </p>
            <p className="text-lg font-medium text-gray-600 mb-2">
              Genre:{data?.data.genre}
            </p>
            <p className="text-lg font-medium text-gray-600 mb-2">
              Publication Date:{" "}
              {makeReadableDateTime(data?.data.publicationDate)}
            </p>
            <div className="flex justify-center items-center gap-4 h-96">
              <button
                onClick={() => handleBookUpdate(data?.data._id)}
                className="px-4 py-2 rounded-xl text-white bg-teal-600 active:scale-95 duration-200"
              >
                Edit Book
              </button>
              <button className="px-4 py-2 rounded-xl text-white bg-red-600 active:scale-95 duration-200">
                Delete Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsCard;
