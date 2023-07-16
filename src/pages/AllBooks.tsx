/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import CardBooks from "@/components/Books/CardBooks";
import FilterForm from "@/components/Books/FilterForm";
import SearchBar from "@/components/Books/SearchBar";
import { useGetBooksQuery } from "@/redux/feature/books/bookApi";
import { IBook } from "@/types/globalTypes";
import React from "react";


const AllBooks: React.FC = () => {
  const {data}=useGetBooksQuery(undefined); 
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
              {data?.data.map((book:IBook) => (
                <CardBooks book={book} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
