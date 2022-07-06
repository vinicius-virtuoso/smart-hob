import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth";
import Context from "../Context";
import Login from "../pages/Login";
import PageNewGroup from "../pages/NewGroup";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Index from "../pages/Index";
import SearchGroups from "../pages/SearchGroups";

const PrivateRoute = ({ children, redirectTo }) => {
  return isAuthenticated() ? children : <Navigate to={redirectTo} />;
};

const PublicRoute = ({ children, redirectTo }) => {
  return !isAuthenticated() ? children : <Navigate to={redirectTo} />;
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
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/procurar-grupos"
            element={
              <PrivateRoute redirectTo="/login">
                <SearchGroups />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/criar-grupo"
            element={
              <PrivateRoute redirectTo="/new-groups">
                <PageNewGroup />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/criar-atividade"
            element={
              <PrivateRoute redirectTo="/login">
                <h1>criar-atividade</h1>
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              <PublicRoute redirectTo="/dashboard">
                <Index />
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
                <Register />
              </PublicRoute>
            }
          />
          {/* Mudar para privada */}
          {/* <Route path="/new-groups" element={<PageNewGroup />} /> */}
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
