/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  useGetReviewBookQuery,
  usePostReviewMutation,
} from "@/redux/feature/books/bookApi";
import { useCheckAuth } from "@/redux/feature/users/userSlice";
import { IReviewProps } from "@/types/globalTypes";
import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

interface Review {
  inputValue: string;
  image: string;
}

export default function ReviewBooks({ id }: IReviewProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const reviewBoxRef = useRef<HTMLDivElement>(null);
  const auth: object | null = JSON.parse(
    localStorage.getItem("authBookworm") || "null"
  );
  const isAuthenticated = useCheckAuth(auth);
  const { data } = useGetReviewBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });
  const [postReview] = usePostReviewMutation();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const options = {
      data: {
        bookId: id,
        reviews: inputValue,
      },
    };
    if (isAuthenticated) {
      postReview(options);
      if (inputValue.trim() !== "") {
        setReviews([...reviews, { inputValue, image }]);
        setInputValue("");
        setImage("");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "you are not authenticated",
        text: "Please login",        
      });
    }
  };

  useEffect(() => {
    if (reviewBoxRef.current) {
      reviewBoxRef.current.scrollTop = reviewBoxRef.current.scrollHeight;
    }
  }, [reviews]);

  useEffect(() => {
    if (data?.data?.reviews) {
      setReviews(
        data.data.reviews.map((review: string) => ({
          inputValue: review,
          image: "https://www.playwire.com/hubfs/Stacy-headshot.png",
        }))
      );
    }
  }, [data?.data?.reviews]);

  return (
    <div className="w-full lg:max-w-md p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Customer Review</h2>
      <div
        ref={reviewBoxRef}
        className={`flex flex-col-reverse space-y-4 ${
          !isAuthenticated ? "h-96" : "h-72"
        } overflow-auto`}
      >
        {reviews
          .slice()
          .reverse()
          .map((review, index) => (
            <div key={index} className="p-2">
              <div className="flex items-center space-x-2">
                <img
                  src={review.image}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <span>{review.inputValue}</span>
              </div>
            </div>
          ))}
      </div>

      <form className="mt-4 flex relative" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow rounded-xl px-3 py-2 border-yellow-700 bg-white focus:outline-none focus:border-yellow-700 focus:ring-0 border"
          placeholder="Your Name"
        />
        <button
          type="submit"
          className="ml-2 bg-indigo-600 text-white py-2 px-4 rounded-xl hover:bg-indigo-700 transition"
        >
          Add Review
        </button>
      </form>
    </div>
  );
}
