import React from "react";
import { ShowPhraseProvider } from "./Provider/ShowModal";
import { UserProvider } from "./Provider/User";

function Context({ children }) {
  return (
    <UserProvider>
      <ShowPhraseProvider>{children}</ShowPhraseProvider>
    </UserProvider>
  );
}

export default Context;
