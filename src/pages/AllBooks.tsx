/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import CardBooks from "@/components/Books/CardBooks";
import FilterForm from "@/components/Books/FilterForm";
import SearchBar from "@/components/Books/SearchBar";
import { useGetBooksQuery } from "@/redux/feature/books/bookApi";
import { setGenre, setpublicationYear } from "@/redux/feature/books/bookSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { IBook } from "@/types/globalTypes";
import React from "react";

const AllBooks: React.FC = () => {
  const { data } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });
  const { genre, publicationYear } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();

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
      data?.data
        ?.filter((book: IBook) => book.genre === genre)
        .map((book: IBook) => book.publicationYear) as string[]
    ),
  ];

  const filteredBooks: IBook[] =
    data?.data?.filter(
      (book: IBook) =>
        publicationYear === "" || book.publicationYear === publicationYear
    ) || [];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-[90%]">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
          <div className="w-full">
            <div className="bg-white rounded-xl shadow-xl w-full h-auto py-4">
              <SearchBar />
              <div className="flex gap-4 items-center justify-center">
                <select
                  className="block mt-4 mb-4 border-yellow-700 focus:outline-none focus:border-yellow-700 focus:ring-0 border rounded-xl p-2"
                  value={genre}
                  onChange={handleGenreChange}
                >
                  <option value="">All Genres</option>
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
                <select
                  className="block mt-4 mb-4 border-yellow-700 focus:outline-none focus:border-yellow-700 focus:ring-0 border rounded-xl p-2"
                  value={publicationYear}
                  onChange={handleYearChange}
                  disabled={!genre}
                >
                  <option value="">All Publication Years</option>
                  {publicationYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full mt-6 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
              {filteredBooks.map((book: IBook) => (
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
