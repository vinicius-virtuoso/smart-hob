import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../auth";
<<<<<<< HEAD
import FormRegisterNew from "../components/FormRegisterNew";

import LoginForm from "../components/LoginForm";
=======
>>>>>>> Developed
import Context from "../Context";
import Login from "../pages/Login";
import Register from "../pages/Register";

const PrivateRoute = ({ children, redirectTo }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

const PublicRoute = ({ children, redirectTo }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default function Rotas() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute redirectTo="/login">
                <h1>dashboard</h1>
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              <PublicRoute redirectTo="/dashboard">
                <h1>Home</h1>
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/dashboard">
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/dashboard">
<<<<<<< HEAD
                <FormRegisterNew/>
=======
                <Register />
>>>>>>> Developed
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={
              <PublicRoute redirectTo="/dashboard">
                <h1>login</h1>
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={
              <PrivateRoute redirectTo="/login">
                <h1>dashboard</h1>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}
