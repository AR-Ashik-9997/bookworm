import { IBook, makeReadableDateTime } from "@/types/globalTypes";
import { Link } from "react-router-dom";
import dummy_book from "../../assets/images/dummy_books.png";

interface IProps {
  book: IBook;
}
export default function CardBooks({ book }: IProps) {
  return (
    <section>
      <Link to={`/book-details/${book._id}`}>
        <div className="bg-white rounded-xl shadow-xl w-full">
          <img
            className="w-full rounded-xl mb-4 p-2 "
            src={dummy_book}
            alt="Card Image"
          />

          <div className="pb-4">
            <h2 className="text-lg font-semibold text-center">{book.title}</h2>
            <p className="text-gray-500 text-center">Athore: {book.author}</p>
            <p className="text-gray-500 text-center">Genre: {book.genre}</p>
            <p className="text-gray-500 text-center">
              Date:
              {makeReadableDateTime(book.publicationDate)}
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}
