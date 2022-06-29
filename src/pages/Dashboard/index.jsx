import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderContainer from "../../components/HeaderContainer";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderContainer />
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
