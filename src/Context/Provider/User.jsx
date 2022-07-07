import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { api_habits } from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [userHobbies, setUserHobbies] = useState([]);
  const [userGroups, setUserGroups] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("@Smart-hob/token") || ""
  );

  const get_user = () => {
    if (token) {
      let { user_id } = jwt_decode(token);
      api_habits.get(`/users/${user_id}/`).then(({ data }) => {
        setUser(data);
      });
    }
  };
  const get_user_groups = () => {
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
  };

  const get_user_hobbies = () => {
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
  };

  useEffect(() => {
    get_user();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  useEffect(() => {
    get_user_groups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  useEffect(() => {
    get_user_hobbies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        user,
        userHobbies,
        setUserHobbies,
        userGroups,
        setUserGroups,
        token,
        setUser,
        setToken,
        get_user,
        get_user_groups,
        get_user_hobbies,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
