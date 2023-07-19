import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import AllBooks from "@/pages/AllBooks";
import BookDetailsCard from "@/pages/BookDetailsCard";
import AddNewBookPage from "@/pages/AddNewBook";
import UpdateBookPage from "@/pages/UpdateBook";
import LoginForm from "@/components/LoginForm/Login";
import SignUpForm from "@/components/LoginForm/SignUp";
import PrivateRoute from "./privateRoute";

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
        element: (
          <PrivateRoute>
            <BookDetailsCard />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-book/:id",
        element: (
          <PrivateRoute>
            <UpdateBookPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/addbook",
        element: (
          <PrivateRoute>
            <AddNewBookPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
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
