import Logo from "../Logo";
import { BoxWelcome } from "./styles";

export const WelcomeLayout = ({ name }) => {
  return (
    <>
      <BoxWelcome>
        <div>
          <Logo />
          <h4>Olá{name && `, ${name}`}!</h4>
        </div>
      </BoxWelcome>
    </>
  );
};
