import CardBooks from "@/components/Books/CardBooks";
import React from "react";

const AllBooks = () => {
  return (
    <section className="bg-gradient-to-r from-[#ebeef098] to-[#ffffff] py-16">
      <div className="container mx-auto px-4 max-w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border border-x-cyan-900">1st</div>
          <div className="col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center bor gap-4 border border-x-cyan-900">
              <CardBooks />              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
