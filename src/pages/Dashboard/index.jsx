import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        Sair
      </button>
      <button
        onClick={() => {
          navigate("/new-groups");
        }}
      >
        Novos Grupos
      </button>
    </div>
  );
}

export default Dashboard;
