import { ISkelitonCard } from "@/types/globalTypes";
import React from "react";
import Skeleton from "react-loading-skeleton";

export default function AllBookCardSkeliton({ cards }: ISkelitonCard) {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <>
        <div className="w-full md:w-4/5 lg:w-full p-4" key={index}>
          <div>
            <Skeleton className="h-96 rounded-xl w-full  mb-4 p-2" />
          </div>
          <div>
            <Skeleton count={4} className="text-center" />
          </div>
        </div>
      </>
    ));
}
