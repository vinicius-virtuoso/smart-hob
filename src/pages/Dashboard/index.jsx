import { useNavigate } from "react-router-dom";

import HeaderContainer from "../../components/HeaderContainer";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeaderContainer />

      <div
        style={{
          backgroundColor: "var(--color-white)",
          display: "flex",
          flex: "1",
        }}
      >
        <h1>Dashboard</h1>
      </div>

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
