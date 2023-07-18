/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { usePostBooksMutation } from "@/redux/feature/books/bookApi";
import { BookFormData } from "@/types/globalTypes";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddNewBookPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookFormData>();
  const [postBook] = usePostBooksMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<BookFormData> = (data) => {
    const { title, author, genre, publicationDate } = data;
    const options = {
      data: {
        title: title,
        author: author,
        genre: genre,
        publicationDate: publicationDate,
        publicationYear: new Date(publicationDate).getFullYear().toString(),
        user: "64b3c2ed9ecf17c635f2ce7b",
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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
          Add New Book
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md p-4">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                {...register("author", { required: "Author is required" })}
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
                type="date"
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewBookPage;
