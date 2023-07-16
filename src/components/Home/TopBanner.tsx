import React from "react";
import books from "../../assets/images/books.png";
const TopBanner: React.FC = () => {
  return (
    <>
      <section className="bg-[#EFF0ED]">
        <div className="container mx-auto px-4 max-w-[90%] py-24">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-center md:text-start">
              <h1 className="text-4xl  lg:text-5xl xl:text-7xl 2xl:text-8xl mb-4 2xl:mb-6">
                Buy and sell your
              </h1>
              <h1 className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl mb-4 2xl:mb-6 ">
                textbooks for the
              </h1>
              <h1 className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl mb-4 2xl:mb-6">
                best price
              </h1>
              <h1 className="text-xl 2xl:text-3xl md:text-base md:w-3/4 text-justify mb-4 tex-center md:text-start">
                you can develop by reading books it is said to be wise beacause
                by reading books you can only.
              </h1>
            </div>
            <div className="order-first mb-4 md:order-none">
              <img
                src={books}
                className="w-full mx-auto md:w-3/5 md:mx-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBanner;
