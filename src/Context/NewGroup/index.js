import { createContext, useContext, useState } from "react";
import { api_habits } from "../../services/api";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

export const NewGroupContext = createContext();

export const NewGroupProvider = ({ children }) => {
  const [token] = useState(localStorage.getItem("@Smart-hob/token") || "");

  const newGroup = (data) => {
    api_habits
      .post("groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Novo grupo adicionado");
        // redirecionar para dashboard
      })
      .catch((err) => console.log(err));
  };

  return (
    <NewGroupContext.Provider value={{ newGroup }}>
      {children}
    </NewGroupContext.Provider>
  );
};

export const useNewGroup = () => useContext(NewGroupContext);
