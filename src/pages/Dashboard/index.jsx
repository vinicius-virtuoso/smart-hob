import React from "react";
import { useNavigate } from "react-router-dom";
import MenuHamb from "../../components/MenuHamb";

function Dashboard() {
  const navigate = useNavigate();
  const handle = () =>{    
    navigate("/")
  }


  const arr=[{text: "Home"},
  {text: "Home"},
  {text: "Home"},
]
  
  return (
    <div>
      <MenuHamb arr={arr}/>
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
