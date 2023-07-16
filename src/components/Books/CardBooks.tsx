import { IBook, makeReadableDateTime } from "@/types/globalTypes";
import { Link } from "react-router-dom";

interface IProps {
  book: IBook;
}
export default function CardBooks({ book }: IProps) {
  return (
    <section className="min-h-screen">
      <Link to={`/book-details/${book._id}`}>
        <div className="bg-white rounded-lg shadow-lg p-6 w-full">
          <img
            className="w-full h-48 object-cover rounded-lg mb-4"
            src="path/to/image1.jpg"
            alt="Card Image"
          />
          <h2 className="text-lg font-semibold text-center">{book.title}</h2>
          <p className="text-gray-500 text-center">{book.author}</p>
          <p className="text-gray-500 text-center">{book.genre}</p>
          <p className="text-gray-500 text-center">
            {makeReadableDateTime(book.publicationDate)}
          </p>
        </div>
      </Link>
    </section>
  );
}
