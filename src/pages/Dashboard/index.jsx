import React from "react";
import { useNavigate } from "react-router-dom";
import CardHobbies from "../../components/CardHobbies";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard</h1>
      <CardHobbies/>
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
