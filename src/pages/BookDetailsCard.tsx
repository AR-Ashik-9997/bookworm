/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "@/redux/feature/books/bookApi";
import { makeReadableDateTime } from "@/types/globalTypes";
import Swal from "sweetalert2";
import dummy_book from "../assets/images/dummy_books.png";
import "react-loading-skeleton/dist/skeleton.css";
import CardDetailsSkeliton from "@/components/Loading/CardDetailsSkeliton";
import { useCheckAuth } from "@/redux/feature/users/userSlice";
import ReviewBooks from "@/components/Books/ReviewBooks";

const BookDetailsCard: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useSingleBookQuery(id, { refetchOnMountOrArgChange: true,pollingInterval:1000 });
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true);
  const [deleteBook] = useDeleteBookMutation();
  const auth = JSON.parse(localStorage.getItem("authBookworm") || "null");
  const isAuthenticated = useCheckAuth(auth);
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
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <section className="min-h-screen py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 2xl:w-4/5 mx-auto p-4">
        <div>
          <div className="grid grid-cols-1 md:p-4 lg:p-0 md:grid-cols-2 bg-white rounded-xl shadow-xl xl:items-center xl:p-4">
            {showSkeleton ? (
              <CardDetailsSkeliton />
            ) : (
              <React.Fragment>
                <div className="w-full md:w-4/5 md:mx-auto lg:mx-0 lg:w-full py-6 lg:p-8 xl:p-0">
                  <div>
                    <img
                      className="mx-auto rounded-xl mr-4 mt-4 lg:mt-0"
                      src={dummy_book}
                      alt="Card"
                    />
                  </div>
                </div>
                <div className="p-4 md:h-64 lg:h-4/5 md:order-2 lg:order-none text-center md:text-start md:mt-8">
                  <h2 className="text-2xl font-bold mb-2">
                    {data?.data.title}
                  </h2>
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

                  {isAuthenticated && (
                    <React.Fragment>
                      <div className="flex md:justify-start lg:justify-center xl:justify-start justify-center flex-wrap items-center gap-4 lg:gap-0 xl:gap-4  pt-4 lg:pt-0 h-32">
                        <button
                          onClick={() => handleBookUpdate(data?.data._id)}
                          className="px-4 lg:px-8 xl:px-4 py-2 w-auto rounded-xl text-white bg-teal-600 active:scale-95 duration-200"
                        >
                          Edit Book
                        </button>
                        {data?.data.user === auth?.userId &&
                          data?.data.role === "owner" && (
                            <button
                              onClick={() => handleDeleteBook(data?.data._id)}
                              className="px-4 lg:px-8 xl:px-4 py-2 rounded-xl text-white bg-red-600 active:scale-95 duration-200"
                            >
                              Delete Book
                            </button>
                          )}
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
        <div>
          <ReviewBooks id={data?.data._id} />
        </div>
      </div>
    </section>
  );
};

export default BookDetailsCard;
