/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostBooksMutation } from "@/redux/feature/books/bookApi";
import { BookFormData } from "@/types/globalTypes";
import Swal from "sweetalert2";
import dummy_book from "../assets/images/dummy_books.png";
import "react-loading-skeleton/dist/skeleton.css";
import CardDetailsSkeliton from "@/components/Loading/CardDetailsSkeliton";
import { SubmitHandler, useForm } from "react-hook-form";

const AddNewBookPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookFormData>();
  const [postBook] = usePostBooksMutation();
  const navigate = useNavigate();
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true);
  const auth=JSON.parse(localStorage.getItem('auth')||"null");
  const onSubmit: SubmitHandler<BookFormData> = (data) => {
    const { title, author, genre, publicationDate } = data;
    const options = {
      data: {
        title: title,
        author: author,
        genre: genre,
        publicationDate: publicationDate,
        publicationYear: new Date(publicationDate).getFullYear().toString(),
        user: auth?.userId,
      },
    };
    postBook(options).then(() => {
      Swal.fire(
        "This book is successfully Added!",
        "You clicked the button!",
        "success"
      ).then(() => {
        reset();
        navigate("/all-books");
      });
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
            <React.Fragment>
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
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                      className={`rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-yellow-700 bg-white w-full focus:outline-none focus:border-yellow-700 focus:ring-0 border ${
                        errors?.title && "input-error"
                      }`}
                      {...register("title", { required: "Title is required" })}
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.title.message}
                      </p>
                    )}
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
                      className={`rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-yellow-700 bg-white w-full focus:outline-none focus:border-yellow-700 focus:ring-0 border ${
                        errors.author && "input-error"
                      }`}
                      {...register("author", {
                        required: "Author is required",
                      })}
                    />
                    {errors.author && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.author.message}
                      </p>
                    )}
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
                      className={`rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-yellow-700 bg-white w-full focus:outline-none focus:border-yellow-700 focus:ring-0 border ${
                        errors.genre && "input-error"
                      }`}
                      {...register("genre", { required: "Genre is required" })}
                    />
                    {errors.genre && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.genre.message}
                      </p>
                    )}
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
                      className={`rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-yellow-700 bg-white w-full focus:outline-none focus:border-yellow-700 focus:ring-0 border ${
                        errors.publicationDate && "input-error"
                      }`}
                      {...register("publicationDate", {
                        required: "Publication date is required",
                      })}
                    />
                    {errors.publicationDate && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.publicationDate.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-xl font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Add New Book
                    </button>
                  </div>
                </form>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </section>
  );
};

export default AddNewBookPage;
