import React from "react";
import { useNavigate } from "react-router-dom";
import { DailyPhrases } from "../../components/DailyPrases";
import { WelcomeLayout } from "../../components/WelcomeUserDisplay";

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
      <WelcomeLayout/>
      <DailyPhrases/>
    </div>
  );
}

export default Dashboard;
