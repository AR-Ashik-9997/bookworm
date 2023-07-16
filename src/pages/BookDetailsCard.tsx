/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import readingBook from "../assets/images/readingbook.png";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "@/redux/feature/books/bookApi";
import { makeReadableDateTime } from "@/types/globalTypes";
import Swal from "sweetalert2";

const BookDetailsCard: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useSingleBookQuery(id,{refetchOnMountOrArgChange: true,pollingInterval:1000});
  const [deleteBook] = useDeleteBookMutation();
  const handleBookUpdate = (id: string) => {
    navigate(`/update-book/${id}`);
  };
  const handleDeleteBook = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook(id).then(() => {
          Swal.fire("Deleted!", "Your file has been deleted.", "success"),
            navigate("/all-books");
        });
      }
    });
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
              <button
                onClick={() => handleDeleteBook(data?.data._id)}
                className="px-4 py-2 rounded-xl text-white bg-red-600 active:scale-95 duration-200"
              >
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
