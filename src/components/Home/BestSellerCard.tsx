/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomNavigationButton from "./CustomNavigationButton";
import "swiper/css";

const BestSellerCard = () => {
  return (
    <section className="bg-white py-4">
      <div className="container mx-auto px-4 max-w-[90%]">
        <div className="py-8">
          <h1 className="text-center text-4xl lg:text-5xl mb-4 2xl:mb-6">
            Best Seller Books
          </h1>
        </div>
        <Swiper
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                className="w-full h-48 object-cover rounded-lg mb-4"
                src="path/to/image1.jpg"
                alt="Card Image"
              />
              <h2 className="text-lg font-semibold">Card 1</h2>
              <p className="text-gray-500">Description 1</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                className="w-full h-48 object-cover rounded-lg mb-4"
                src="path/to/image2.jpg"
                alt="Card Image"
              />
              <h2 className="text-lg font-semibold">Card 2</h2>
              <p className="text-gray-500">Description 2</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                className="w-full h-48 object-cover rounded-lg mb-4"
                src="path/to/image3.jpg"
                alt="Card Image"
              />
              <h2 className="text-lg font-semibold">Card 3</h2>
              <p className="text-gray-500">Description 3</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                className="w-full h-48 object-cover rounded-lg mb-4"
                src="path/to/image4.jpg"
                alt="Card Image"
              />
              <h2 className="text-lg font-semibold">Card 4</h2>
              <p className="text-gray-500">Description 4</p>
            </div>
          </SwiperSlide>          
          <span className="xl:hidden"><CustomNavigationButton /></span>
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellerCard;
