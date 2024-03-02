import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";

// export const ProtectedRouteForAuthSlash = ({ children }) => {
//   const authToken = getAuthTokenFromCookie();
//   if (authToken) {
//     return <Navigate to={"/"} replace={true}></Navigate>;
//   }
//   return children;
// };



export const ProtectedRouteForUser = ({ children }) => {
  const storedUserData = localStorage.getItem('user');
  const userData = storedUserData ? JSON.parse(storedUserData) : null;

  if (!userData || !userData.access_token) {
      return <Navigate to="/login" replace={true} />;
  }

  return children;
};