export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  publicationYear: string;
  user: string;
}
export type BookFormData = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  publicationYear: string;
};

export const makeReadableDateTime = (date: string): string => {
  const readableTime = new Date(date).toLocaleString("en-UK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return readableTime;
};

export interface IProps {
  book: IBook;
}
export type ISkelitonCard = {
  cards: number;
};

export type FormData = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};
