import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { api_habits } from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [userHobbies, setUserHobbies] = useState([]);
  const [userGroups, setUserGroups] = useState([]);

  const [showPhrase, setShowPhrase] = useState(
    localStorage.getItem("@Smart-hob/frases") || true
  );

  const [token, setToken] = useState(
    localStorage.getItem("@Smart-hob/token") || ""
  );

  useEffect(() => {
    if (token) {
      let { user_id } = jwt_decode(token);
      api_habits.get(`/users/${user_id}/`).then(({ data }) => {
        setUser(data);
      });
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      api_habits
        .get(`/groups/subscriptions/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then(({ data }) => {
          setUserGroups(data);
        });
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      api_habits
        .get("/habits/personal/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then(({ data }) => {
          setUserHobbies(data);
        });
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        user,
        userHobbies,
        userGroups,
        token,
        showPhrase,
        setShowPhrase,
        setUser,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
