import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth";
import Context from "../Context";
import Login from "../pages/Login";
import PageNewGroup from "../pages/NewGroup";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Index from "../pages/Index";
import PageNewHabit from "../pages/PageNewHabit/index";
import SearchGroups from "../pages/SearchGroups";
<<<<<<< HEAD
import PageEditHabit from "../pages/EditHabit";
=======
>>>>>>> 6ad1c183247573dd147f3d2445ca6de8f92c9574

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
            path="/dashboard/criar-grupos"
            element={
<<<<<<< HEAD
              <PrivateRoute redirectTo="/login">
=======
              <PrivateRoute redirectTo="/new-groups">
>>>>>>> 6ad1c183247573dd147f3d2445ca6de8f92c9574
                <PageNewGroup />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/criar-atividade"
            element={
              <PrivateRoute redirectTo="/login">
                <PageNewHabit />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/editar-atividade/:id"
            element={
              <PrivateRoute redirectTo="/login">
                <PageEditHabit />
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
<<<<<<< HEAD
=======
          {/* Mudar para privada */}
          {/* <Route path="/new-groups" element={<PageNewGroup />} /> */}
>>>>>>> 6ad1c183247573dd147f3d2445ca6de8f92c9574
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
