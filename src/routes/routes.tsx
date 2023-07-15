import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import AllBooks from "@/pages/AllBooks";
import BookDetailsCard from "@/pages/BookDetailsCard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/all-books", element: <AllBooks /> },
      { path: "/book-details", element: <BookDetailsCard title={""} author={""} genre={""} publicationDate={""} reviews={[]} /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
