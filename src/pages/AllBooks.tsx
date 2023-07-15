import CardBooks from "@/components/Books/CardBooks";
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
    <section className="bg-gradient-to-r from-[#ebeef098] to-[#ffffff] py-16">
      <div className="container mx-auto px-4 max-w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border border-x-cyan-900">1st</div>
          <div className="col-span-3 w-full border border-cyan-600">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 border border-cyan-800">
              {a.map((a, i) => (
                <CardBooks data={a.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
