import React from "react";
import { useNavigate } from "react-router-dom";
import CardSugestoes from "../../components/CardSugestoes";

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

      {/* Card - Sugestões */}
      <CardSugestoes />
    </div>
  );
}

export default Dashboard;
