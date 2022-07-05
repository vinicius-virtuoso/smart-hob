import React from "react";
import { NewGroupProvider } from "./NewGroup";

import { UserProvider } from "./Provider/User";

function Context({ children }) {
  return (
    <UserProvider>
      <NewGroupProvider>{children}</NewGroupProvider>
    </UserProvider>
  );
}

export default Context;
