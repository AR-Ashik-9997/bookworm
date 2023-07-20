/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCheckAuth = (auth: object | null): boolean => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = () => {
      if (auth === null) {
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    };
    checkAuth();
    const interval = setInterval(checkAuth, 1000);
    return () => clearInterval(interval);
  }, [auth]);

  return isAuthenticated;
};

export const useLogoutAndRedirect = (
  logoutCallback: () => void,
  homePagePath = "/"
) => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleLogoutAndRedirect = () => {
      logoutCallback();
      localStorage.removeItem("authBookworm");
      navigate(homePagePath);
    };

    handleLogoutAndRedirect();

    return () => {};
  }, [logoutCallback, homePagePath, navigate]);
};
