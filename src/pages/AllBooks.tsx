import CardBooks from "@/components/Books/CardBooks";
import FilterForm from "@/components/Books/FilterForm";
import SearchBar from "@/components/Books/SearchBar";
import React from "react";

const a = [
  {
    name: "abc",
  },
  {
    name: "abc",
  },
  {
    name: "abc",
  },
  {
    name: "abc",
  },
  
];
const AllBooks: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-[90%]">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
          <div className="w-full">
            <div className="shadow-lg w-full h-auto py-4">
              <SearchBar />
              <FilterForm />
            </div>
          </div>

          <div className="col-span-3 w-full mt-6 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
              {a.map((a, i) => (
                <CardBooks data={a.name} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
