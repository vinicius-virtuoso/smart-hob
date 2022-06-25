import React from "react";
import { useNavigate } from "react-router-dom";
import SelectForm from "../../components/SelectForm";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
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
