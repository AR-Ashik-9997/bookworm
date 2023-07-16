export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  user: string;
}
export type BookFormData = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;  
};

export const makeReadableDateTime = (date: string): string => {
  const readableTime = new Date(date).toLocaleString("en-UK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return readableTime;
};