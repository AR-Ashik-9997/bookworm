/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useCheckAuth } from "@/redux/feature/users/userSlice";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { pathname } = useLocation();
  const auth: object | null = JSON.parse(
    localStorage.getItem("authBookworm") || "null"
  );
  const isAuthenticated = useCheckAuth(auth);
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
}
