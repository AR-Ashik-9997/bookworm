import React from "react";
import readingBook from "../../assets/images/readingbook.png";

const AdvertiseCard: React.FC = () => {
  return (
    <section className="py-16 lg:pt-48">
      <div className="container mx-auto px-4 max-w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              className=" w-full h-full mx-auto mr-4"
              src={readingBook}
              alt="Card"
            />
          </div>
          <div className="text-center bg-[#F5F3EF] flex flex-col items-center justify-center mt-4 md:mt-0">
            <h1 className="text-gray-700 text-4xl lg:text-5xl xl:text-7xl">
              We Provide You The Experience
            </h1>
            <div className="flex justify-center items-center md:pb-4">
              <p className="pt-6 text-xl md:text-2xl w-full md:w-3/4">
                Browse the collection of our best selling and top interesting
                products
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseCard;
