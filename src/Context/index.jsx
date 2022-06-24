import React from "react";
import { AuthProvider } from "../auth";
import { NewGroupProvider } from "./NewGroup";

import { UserProvider } from "./Provider/User";

function Context({ children }) {
  return (
    <AuthProvider>
      <UserProvider>
        <NewGroupProvider>{children}</NewGroupProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default Context;
