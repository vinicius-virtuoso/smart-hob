import React from "react";
import { AuthProvider } from "../auth";

import { UserProvider } from "./Provider/User";

function Context({ children }) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
}

export default Context;
