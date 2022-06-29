import React from "react";
import { useNavigate } from "react-router-dom";
import SugestionGroupsCarousel from "../../components/SugestionGroupsCarousel";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard</h1>
      <SugestionGroupsCarousel/>
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
