/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from "react";
import {
  useSingleBookQuery,
  useUpdateBookMutation,
} from "@/redux/feature/books/bookApi";
import { IBook } from "@/types/globalTypes";
import { useParams } from "react-router-dom";

const UpdateBookPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useSingleBookQuery(id);
  const [bookData, setBookData] = useState<Partial<IBook>>({
    title: data?.data.title,
    author: data?.data.author,
    genre: data?.data.genre,
    publicationDate: data?.data.publicationDate,
  });
  const [updateBook] = useUpdateBookMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();  
    try {
      await updateBook({
        _id: id,
        ...bookData,
      })
        .unwrap()
        .then((res) => console.log(res));
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookData({
      ...bookData,
      [e.target.id]: e.target.value,
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
          Update Book
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md p-4">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter the book title"
                className="rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-yellow-700 bg-white w-full focus:outline-none focus:border-yellow-700 focus:ring-0 border"
                value={bookData.title || data?.data.title}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium text-gray-700"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                placeholder="Enter the book author"
                className="rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-yellow-700 bg-white w-full focus:outline-none focus:border-yellow-700 focus:ring-0 border"
                value={bookData.author||data?.data.author}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="genre"
                className="block text-sm font-medium text-gray-700"
              >
                Genre
              </label>
              <input
                type="text"
                id="genre"
                placeholder="Enter the book genre"
                className="rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-yellow-700 bg-white w-full focus:outline-none focus:border-yellow-700 focus:ring-0 border"
                value={bookData.genre||data?.data.genre}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="publicationDate"
                className="block text-sm font-medium text-gray-700"
              >
                Publication Date
              </label>
              <input
                type="date"
                id="publicationDate"
                className="rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-yellow-700 bg-white w-full focus:outline-none focus:border-yellow-700 focus:ring-0 border"
                value={bookData.publicationDate||data?.data.publicationDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-xl font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookPage;
