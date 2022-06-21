import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("@Smart-hob/token"));
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
