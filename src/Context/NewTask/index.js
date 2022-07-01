import { createContext, useContext, useState } from "react";
import { api_habits } from "../../services/api";

export const NewTaskContext = createContext();

export const NewTaskProvider = ({ children }) => {
  const [token] = useState(localStorage.getItem("@Smart-hob/token") || "");

  const newTask = (data) => {
    api_habits
      .post("habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <NewTaskContext.Provider value={{ newTask }}>
      {children}
    </NewTaskContext.Provider>
  );
};
export const useNewTask = () => useContext(NewTaskContext);
