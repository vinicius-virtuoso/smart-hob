import React from "react";
import { UserProvider } from "./Provider/User";

function Context({ children }) {
  return <UserProvider>{children}</UserProvider>;
}

export default Context;
