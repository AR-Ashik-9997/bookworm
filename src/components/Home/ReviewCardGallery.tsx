import React from "react";

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    name: "John Doe",
    rating: 4,
    comment: "Great product! Highly recommended.",
  },
  {
    name: "Jane Smith",
    rating: 5,
    comment: "Excellent service. Will definitely buy again.",
  },
  {
    name: "Michael Johnson",
    rating: 3.5,
    comment: "Decent quality, but could be better.",
  },
  {
    name: "Emily Davis",
    rating: 4.5,
    comment: "Very satisfied with my purchase. Thank you!",
  },
];
const ReviewCard: React.FC<Review> = ({ name, rating, comment }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mt-2">
        <span className="text-yellow-500 flex gap-2">
          {Array.from({ length: Math.floor(rating) }, (_, index) => (
            <svg
              key={index}
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15.46l-6.12 3.55a1 1 0 01-1.45-1.05l1.17-6.8L.27 7.44a1 1 0 01.56-1.7l6.83-.99L9.17.95a1 1 0 011.66 0l3.32 4.2 6.83.99a1 1 0 01.56 1.7l-4.22 4.36 1.17 6.8a1 1 0 01-1.45 1.05L10 15.46z" />
            </svg>
          ))}
        </span>
      </div>
      <p className="text-gray-700 pt-6">{comment}</p>
      <div className="flex items-center pt-6">
        <img className="w-12 h-12 rounded-full mr-4" src="" alt="" />
        <h3 className="text-lg font-bold">dcdcdc</h3>
      </div>
    </div>
  );
};

const ReviewCardGallery: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#ebeef098] to-[#ffffff] py-16 mt-24">
      <div className="container mx-auto px-4 max-w-[90%]">
        <div className="py-8">
          <h1 className="text-center text-4xl lg:text-5xl mb-4  2xl:mb-6">
            Our Customer
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCardGallery;
