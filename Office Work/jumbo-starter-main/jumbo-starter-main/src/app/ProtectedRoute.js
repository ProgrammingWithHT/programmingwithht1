import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
    console.log('running protected route')
  if (loading) {
    return <div>Loading...</div>; // You can add a proper loading state here
  }

  if (!isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  if (isAdmin && user && user.role !== 'admin') {
    return <Navigate to="/dashboard" />;
  }

  return <Fragment>{children}</Fragment>;
};

export default ProtectedRoute;
