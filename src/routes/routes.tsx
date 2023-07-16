import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import AllBooks from "@/pages/AllBooks";
import BookDetailsCard from "@/pages/BookDetailsCard";
import SignUpForm from "@/pages/SignUp";
import AddNewBookPage from "@/pages/AddNewBook";

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
      {
        path: "/book-details/:id",
        element: <BookDetailsCard/>,
      },
      { path: "/addbook", element: <AddNewBookPage /> },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
