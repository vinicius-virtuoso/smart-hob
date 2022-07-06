

import { CountPagesProvider } from "./Provider/CountPages";
import { ShowPhraseProvider } from "./Provider/ShowModal";
import { UserProvider } from "./Provider/User";

function Context({ children }) {
  return (
    <UserProvider>

      <ShowPhraseProvider>
        <CountPagesProvider>{children}</CountPagesProvider>
      </ShowPhraseProvider>

    </UserProvider>
  );
}

export default Context;