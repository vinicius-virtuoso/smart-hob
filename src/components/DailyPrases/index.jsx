import { BoxPhrases } from "./styles";
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { api_phrases } from "../../services/api";
import axios from "axios";

export const DailyPhrases = () => {
  const [frase, setFrase] = useState("");
  const [isOpen, setIsOpen] = useState(
    JSON.parse(localStorage.getItem("show-frases") || true)
  );

  useEffect(() => {
    if (isOpen) {
      api_phrases
        .get("/quotes/random")
        .then(({ data }) => setFrase(data.data))
        .catch((err) => console.log(err));
    }
  }, [isOpen]);

  function close_frase() {
    setIsOpen(false);
    JSON.stringify(localStorage.setItem("show-frases", false));
  }

  return (
    <>
      <BoxPhrases isOpen={isOpen}>
        <button onClick={close_frase}>
          <AiFillCloseCircle />
        </button>
        <h5>Frase do dia</h5>
        <p>{frase || "Viva o hoje como se fosse o ultimo."}</p>
      </BoxPhrases>
    </>
  );
};