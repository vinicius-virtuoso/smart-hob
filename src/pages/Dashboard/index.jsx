import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1>Dashboard</h1>
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
