import React from 'react';
import { Navigate } from 'react-router-dom';  // Import Navigate for redirection
import { useAuth } from '../context/AuthContext'; // Use auth context to check if the user is logged in

const PrivateRoute = ({ Component }) => {
  const { user } = useAuth(); // Get the user from the AuthContext

  // If the user is not logged in, redirect to the login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If the user is logged in, render the Component passed as prop
  return <Component />;
};

export default PrivateRoute;
