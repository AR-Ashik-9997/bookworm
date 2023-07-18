import React from "react";
import Skeleton from "react-loading-skeleton";

export default function CardDetailsSkeliton() {
  return (
    <>
      <div className="w-full md:w-4/5 lg:w-full p-4">
        <div>
          <Skeleton className="mx-auto h-96 rounded-xl mr-4 mt-4 lg:mt-0" />
        </div>
      </div>
      <div className="p-4 md:h-64 lg:h-4/5 md:order-2 lg:order-none text-center lg:text-start">
        <Skeleton count={4} />
        <div className="flex justify-center items-center gap-4 pt-4 lg:pt-0 lg:h-96">
          <Skeleton count={2} />
        </div>
      </div>
    </>
  );
}
