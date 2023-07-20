/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCheckAuth } from "@/redux/feature/users/userSlice";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { pathname } = useLocation();
  const auth: string | undefined = Cookies.get("userId");
  const isAuthenticated = useCheckAuth(auth);
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
}
