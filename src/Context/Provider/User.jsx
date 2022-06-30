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
        let user = data;
        get_groups(user);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const get_groups = (user) => {
    api_habits
      .get(`/groups/subscriptions/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(({ data }) => {
        let groups = data;
        let objUser = { user, groups };
        searchHobbies(objUser);
      });
  };

  const searchHobbies = (user) => {
    api_habits
      .get("/habits/personal/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(({ data }) => {
        let hobbies = data;
        setUser({ ...user, hobbies });
      });
  };
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
