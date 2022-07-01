import React from "react";
import { NewGroupProvider } from "./NewGroup";
import { NewTaskProvider } from "./NewTask";

import { UserProvider } from "./Provider/User";

function Context({ children }) {
  return (
    <UserProvider>
      <NewGroupProvider>
        <NewTaskProvider>{children}</NewTaskProvider>
      </NewGroupProvider>
    </UserProvider>
  );
}

export default Context;
