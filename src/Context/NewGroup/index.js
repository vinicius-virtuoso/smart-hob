import { createContext, useContext } from "react";
import api from "../../services/api";

export const NewGroupContext = createContext();

export const NewGroupProvider = ({ children }) => {
  const newGroup = (data) => {
    api
      .post("groups/", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <NewGroupContext.Provider value={{ newGroup }}>
      {children}
    </NewGroupContext.Provider>
  );
};

export const useNewGroup = () => useContext(NewGroupContext);
