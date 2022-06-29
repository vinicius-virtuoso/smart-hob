import { BoxWelcome } from "./styles";

export const WelcomeLayout = ({ name }) => {
  return (
    <>
      <BoxWelcome>
        <div>
          <img
            src="https://img.quizur.com/f/img5ded089be6b462.14971650.jpeg?lastEdited=1575815353"
            alt="imageLogin"
          />
          <h4>Olá {name && name}!</h4>
        </div>
      </BoxWelcome>
    </>
  );
};
