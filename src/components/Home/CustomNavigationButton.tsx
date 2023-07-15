/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { useSwiper } from "swiper/react";
import { TfiAngleDoubleRight } from "react-icons/tfi";


const CustomNavigationButton: React.FC = () => {
  const swiper = useSwiper();

  return (
    <div className="pt-6 flex justify-end gap-2">
      <button
        className="px-4 py-2 flex items-center justify-center gap-4 cursor-pointer bg-teal-500 rounded-xl text-xl text-white font-medium"      
        onClick={() => swiper.slideNext()}
      >
        Next <TfiAngleDoubleRight />
      </button>
    </div>
  );
};

export default CustomNavigationButton;
