import { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Container, Div } from "./styled";
import { ShowPhraseContext } from "../../Context/Provider/ShowModal";

const ModalPhrase = () => {
  const { openPhrase, close_phrase, phrase } = useContext(ShowPhraseContext);

  return (
    <>
      {!!openPhrase ? (
        <Container>
          <Div>
            <div>
              <h5>Frase do Dia</h5>
              <p>{phrase || "Viva o hoje como se fosse o ultimo."}</p>
            </div>
            <button onClick={close_phrase}>
              <p>
                <AiFillCloseCircle />
              </p>
            </button>
          </Div>
        </Container>
      ) : null}
    </>
  );
};
export default ModalPhrase;
