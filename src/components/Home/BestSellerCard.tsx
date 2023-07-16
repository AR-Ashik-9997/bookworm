/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomNavigationButton from "./CustomNavigationButton";
import "swiper/css";
import book_2 from "../../assets/images/book_2.png";
import firstbook from "../../assets/images/firstbook.png";
import lastbook from "../../assets/images/lastbook.png";
import thirdbook from "../../assets/images/thirdbook.png";

const images = [
  {
    image: book_2,
  },
  {
    image: firstbook,
  },
  {
    image: lastbook,
  },
  {
    image: thirdbook,
  },
];
const BestSellerCard: React.FC = () => {
  return (
    <section className="py-4">
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
          {images.map((item, i: number) => (
            <SwiperSlide>
              <div className="rounded-lg p-6" key={i}>
                <img
                  className="w-full object-cover rounded-xl mb-4 "
                  src={item.image}
                  alt="Card Image"
                />
              </div>
            </SwiperSlide>
          ))}

          <span className="xl:hidden">
            <CustomNavigationButton />
          </span>
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellerCard;
