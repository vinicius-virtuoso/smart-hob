import Logo from "../Logo";
import { BoxWelcome } from "./styles";

export const WelcomeLayout = ({ name }) => {
  return (
    <>
      <BoxWelcome>
        <div>
          <Logo size={70} />
          <h4>Olá{name && `, ${name}`}!</h4>
        </div>
      </BoxWelcome>
    </>
  );
};
