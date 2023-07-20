/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect, useState } from "react";
import { IBook } from "@/types/globalTypes";
import {
  setGenre,
  setpublicationYear,
  setsearchTerm,
} from "@/redux/feature/books/bookSlice";
import { useGetBooksQuery } from "@/redux/feature/books/bookApi";
import CardBooks from "@/components/Books/CardBooks";
import AllBookCardSkeliton from "@/components/Loading/AllBookCardSkeliton";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";

const AllBooks: React.FC = () => {
  const { genre, publicationYear, searchTerm } = useAppSelector(
    (state) => state.book
  );
  const { data } = useGetBooksQuery(searchTerm, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });
  const dispatch = useAppDispatch();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    dispatch(setGenre(""));
    dispatch(setsearchTerm(search));
  };
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true);

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenre = e.target.value;
    dispatch(setGenre(selectedGenre));
  };
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = e.target.value;
    dispatch(setpublicationYear(selectedYear));
  };

  const genres: string[] = [
    ...new Set(
      (data?.data?.map((book: IBook) => book.genre) as string[]) || []
    ),
  ];
  const publicationYears: string[] = [
    ...new Set(
      data?.data.map((book: IBook) => book.publicationYear) as string[]
    ),
  ];
  if (genre === "") {
    dispatch(setpublicationYear(""));
  }
  const filteredBooks: IBook[] =
    data?.data?.filter(
      (book: IBook) =>
        publicationYear === "" || book.publicationYear === publicationYear
    ) || [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [filteredBooks.length]);
  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-[90%]">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
          <div className="w-full">
            <div className="bg-white rounded-xl shadow-xl w-full h-auto py-4">
              <div className="flex items-center lg:flex-col xl:flex-row gap-2 p-4">
                <input
                  id="searchInput"
                  type="text"
                  className="rounded-xl p-2 border-t mr-0 mb-2 sm:mr-2 sm:mb-0 sm:border-b sm:border-l text-gray-800 border-yellow-700 bg-white w-full focus:outline-none focus:border-yellow-700 focus:ring-0 border "
                  placeholder="Search by title author genre publicationYear..."
                  value={searchTerm}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center flex-wrap justify-center xl:flex-row gap-4 p-4">
                <select
                  className="block  mb-4 border-yellow-700 focus:outline-none focus:border-yellow-700 focus:ring-0 border rounded-xl p-2"
                  value={genre}
                  onChange={handleGenreChange}
                >
                  <option value="">Filter by all genres</option>
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
                <select
                  className="block mb-4 border-yellow-700 focus:outline-none focus:border-yellow-700 focus:ring-0 border rounded-xl p-2"
                  value={publicationYear}
                  onChange={handleYearChange}
                >
                  <option value="">Filter by all Years</option>
                  {publicationYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          {data?.data.length > 0 ? (
            <div className="col-span-3 w-full mt-6 lg:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {filteredBooks.map((book: IBook) => (
                  <React.Fragment key={book._id}>
                    {showSkeleton ? (
                      <AllBookCardSkeliton cards={filteredBooks.length} />
                    ) : (
                      <CardBooks book={book} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ) : (
            <div className="col-span-3 w-full mt-6 lg:mt-0 ">
              <div className="flex items-center justify-center h-96">
                <h1 className="text-center font-semibold text-3xl">
                  Data Not Found!
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
