import { createContext, useEffect, useState } from "react";
import { api_phrases } from "../../services/api";

export const ShowPhraseContext = createContext();

export const ShowPhraseProvider = ({ children }) => {
  const [phrase, setPhrase] = useState([]);
  const [storage, setStorage] = useState([]);
  const [openPhrase, setOpenPhrase] = useState();
  const guarding = JSON.parse(localStorage.getItem("show-frases")) || true;

  const loadPhrase = () => {
    api_phrases
      .get(`/frases/random`)
      .then((res) => {
        const { frase } = res.data;
        setStorage(localStorage.setItem("show-frases", true));
        setPhrase(frase);
      })
      .catch((err) => console.log(err));
  };

  const close_phrase = () => {
    setOpenPhrase(false);
    setStorage(localStorage.setItem("show-frases", false));
  };

  const open_phrase = () => {
    loadPhrase();
    setOpenPhrase(true);
  };

  useEffect(() => {
    if (guarding === true) {
      setOpenPhrase(true);
      loadPhrase();
    }
  }, [guarding]);

  return (
    <ShowPhraseContext.Provider
      value={{
        phrase,
        setPhrase,
        storage,
        setStorage,
        openPhrase,
        setOpenPhrase,
        close_phrase,
        open_phrase,
      }}
    >
      {children}
    </ShowPhraseContext.Provider>
  );
};
