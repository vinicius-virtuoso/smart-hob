import { BoxPhrases } from "./styles";
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { api_phrases } from "../../services/api";

export const DailyPhrases = () => {
  const [frase, setFrase] = useState("");
  const [isOpen, setIsOpen] = useState(
    JSON.parse(localStorage.getItem("show-frases") || true)
  );

  const closeFrase = () => {
    setIsOpen(false);
    localStorage.setItem("show-frases", false);
  };

  useEffect(() => {
    if (isOpen) {
      api_phrases
        .get("/frases/random")
        .then(({ data }) => {
          setFrase(data.frase);
        })
        .catch((err) => console.log(err));
    }
    clickPhrase();
  }, [isOpen]);

  const clickPhrase = () => {
    localStorage.setItem("show-frases", true);
  };

  return (
    <>
      <BoxPhrases isOpen={isOpen}>
        <button onClick={closeFrase}>
          <AiFillCloseCircle />
        </button>
        <h5>Frase do dia</h5>
        <p>{frase || "Viva o hoje como se fosse o ultimo."}</p>
      </BoxPhrases>
    </>
  );
};
