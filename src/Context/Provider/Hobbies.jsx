import { createContext, useContext, useEffect, useState } from "react";
import { api_habits } from "../../services/api";
import { UserContext } from "./User";

export const HobbiesContext = createContext();

export const HobbiesProvider = ({ children }) => {
  const { token } = useContext(UserContext);
  const [userHobbies, setUserHobbies] = useState([]);

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
    <HobbiesContext.Provider
      value={{
        userHobbies,
        setUserHobbies,
      }}
    >
      {children}
    </HobbiesContext.Provider>
  );
};
