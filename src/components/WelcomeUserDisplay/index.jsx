import { useState } from "react";
import { BoxWelcome } from "./styles";

export const WelcomeLayout = () => {
  const [user, setUser] = useState("Arthur");

  return (
    <>
      <BoxWelcome>
        <div>
          <img
            src="https://img.quizur.com/f/img5ded089be6b462.14971650.jpeg?lastEdited=1575815353"
            alt="imageLogin"
          />
          <h4>Olá {user}!</h4>
        </div>
      </BoxWelcome>
    </>
  );
};
