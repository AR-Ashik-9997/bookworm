/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import CardBooks from "@/components/Books/CardBooks";
import { useGetBooksQuery } from "@/redux/feature/books/bookApi";
import {
  setGenre,
  setpublicationYear,
  setsearchTerm,
} from "@/redux/feature/books/bookSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { IBook } from "@/types/globalTypes";
import React from "react";

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
    dispatch(setsearchTerm(search));
  };

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
  if (genre === "") {
    dispatch(setpublicationYear(""));
  }
  const filteredBooks: IBook[] =
    data?.data?.filter(
      (book: IBook) =>
        genre === "" ||
        publicationYear === "" ||
        book.publicationYear === publicationYear
    ) || [];
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
                  disabled={!genre}
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

          <div className="col-span-3 w-full mt-6 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
              {filteredBooks.map((book: IBook) => (
                <CardBooks book={book} />
              ))}
            </div>
          </div>
          <iframe
            height="300"            
            title="404 Page"
            src="https://codepen.io/sarazond/embed/jOKyjZ?default-tab=html%2Cresult"
            frameBorder="no"
            loading="lazy"           
           
          >
            See the Pen{" "}
            <a href="https://codepen.io/sarazond/pen/jOKyjZ">404 Page</a> by
            sarazond (<a href="https://codepen.io/sarazond">@sarazond</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
