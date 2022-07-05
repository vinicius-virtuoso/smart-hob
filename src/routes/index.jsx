import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth";
import Context from "../Context";

import Login from "../pages/Login";
import PageNewGroup from "../pages/NewGroup";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Index from "../pages/Index";
import PageNewHabit from "../pages/NewHabit/index,";
import PageEditHabit from "../pages/EditHabit/index,";

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
                <h1>procurar-grupos</h1>
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/criar-grupos"
            element={
              <PrivateRoute redirectTo="/new-groups">
                <PageNewGroup />
              </PrivateRoute>
            }
          />

          <Route path="new-groups" element={<PageNewGroup />} />

          <Route
            path="/dashboard/my-groups"
            element={
              <PrivateRoute redirectTo="/login">
                <h1>pagina de grupos do usuário</h1>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/my-hobbies"
            element={
              <PrivateRoute redirectTo="/login">
                <h1>pagina de hobbies do usuário</h1>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/criar-atividade"
            element={
              <PrivateRoute redirectTo="/new-tasks">
                <PageNewHabit />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/editar-atividade/:hobbie_id"
            element={<PageEditHabit />}
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
