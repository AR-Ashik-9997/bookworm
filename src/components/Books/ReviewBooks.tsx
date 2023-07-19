import React, { useState, useRef, useEffect } from "react";

interface Review {
  name: string;
  image: string;
}

export default function ReviewBooks() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const reviewBoxRef = useRef<HTMLDivElement>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() !== "") {
      const newReview: Review = {
        name,
        image,
      };
      setReviews((prevReviews) => [...prevReviews, newReview]);
      setName("");
      setImage("");
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the review box whenever new reviews are added
    if (reviewBoxRef.current) {
      reviewBoxRef.current.scrollTop = reviewBoxRef.current.scrollHeight;
    }
  }, [reviews]);

  return (
    <div className="w-full lg:max-w-md p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Customer Review</h2>
      <div
        ref={reviewBoxRef}
        className="flex flex-col-reverse space-y-4 h-72 overflow-auto"
      >
        {reviews.slice().reverse().map((review, index) => (
          <div key={index} className="p-2">
            <div className="flex items-center space-x-2">
              <img
                src={review.image}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <span>{review.name}</span>
            </div>
          </div>
        ))}
      </div>
      <form className="mt-4 flex relative" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-grow rounded-xl px-3 py-2 border-yellow-700 bg-white focus:outline-none focus:border-yellow-700 focus:ring-0 border"
          placeholder="Your Name"
        />        
        <button
          type="submit"
          className="ml-2 bg-indigo-600 text-white py-2 px-4 rounded-lg rounded-xl hover:bg-indigo-700 transition"
        >
          Add Review
        </button>
      </form>
    </div>
  );
}
