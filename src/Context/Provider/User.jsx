import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { api_habits } from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  let token = localStorage.getItem("@Smart-hob/token");

  useEffect(() => {
    if (token) {
      let { user_id } = jwt_decode(token);
      api_habits.get(`/users/${user_id}/`).then(({ data }) => {
        setUser({ ...data });
      });
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
