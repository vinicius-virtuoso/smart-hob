import React from "react";
import { useNavigate } from "react-router-dom";
import CardGroups from "../../components/CardGroups";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard</h1>
      <CardGroups />
      <button
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        Sair
      </button>
    </div>
  );
}

export default Dashboard;
