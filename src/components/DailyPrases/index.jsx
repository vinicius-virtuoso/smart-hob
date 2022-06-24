import { BoxPhrases } from "./styles";
import { AiFillCloseCircle } from "react-icons/ai";

export const DailyPhrases = () => {
  return (
    <>
      <BoxPhrases>
        <button>
          <AiFillCloseCircle />
        </button>
        <h5>Frase do dia</h5>
        <p>Para as mentes brilhantes nem o céu é o limite</p>
      </BoxPhrases>
    </>
  );
};
