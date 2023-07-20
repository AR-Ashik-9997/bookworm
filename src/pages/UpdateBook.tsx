/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSingleBookQuery, useUpdateBookMutation } from "@/redux/feature/books/bookApi";
import { IBook } from "@/types/globalTypes";
import Swal from "sweetalert2";
import dummy_book from "../assets/images/dummy_books.png";
import "react-loading-skeleton/dist/skeleton.css";
import CardDetailsSkeliton from "@/components/Loading/CardDetailsSkeliton";

const UpdateBookPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useSingleBookQuery(id,{refetchOnMountOrArgChange:true,pollingInterval:1000});
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true);
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
        .then((res) => {
          Swal.fire(
            "This book is successfully updated!",
            "You clicked the button!",
            "success"
          ).then(() => navigate("/all-books"));
        });
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
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="min-h-screen py-16 flex justify-center items-center">
      <div className="container px-4 mx-auto w-full md:max-w-[80%] 2xl:max-w-[40%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl shadow-lg items-center">
          {showSkeleton ? (
            <CardDetailsSkeliton />
          ) : (
            <>
              <div className="w-full md:w-4/5 lg:w-full">
                <div>
                  <img
                    className=" rounded-xl mt-4 lg:mt-0 p-4"
                    src={dummy_book}
                    alt="Card"
                  />
                </div>
              </div>
              <div className="p-4 md:order-2 lg:order-none">
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
                      value={bookData.author || data?.data.author}
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
                      value={bookData.genre || data?.data.genre}
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
                      type="month"
                      id="publicationDate"
                      className="rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-yellow-700 bg-white w-full focus:outline-none focus:border-yellow-700 focus:ring-0 border"
                      value={
                        bookData.publicationDate || data?.data.publicationDate
                      }
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-xl font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Update Book
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpdateBookPage;
