import { useState } from "react";
import Logo from "../Logo";
import { BoxWelcome } from "./styles";

export const WelcomeLayout = ({ name }) => {
  const [mobile, setMobile] = useState(window.screen.width <= 768);

  window.addEventListener("resize", () => {
    if (window.screen.width <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });

  return (
    <>
      <BoxWelcome>
        <div>
          <Logo size={mobile ? 40 : 70} />
          <h4>Olá{name && `, ${name}`}!</h4>
        </div>
      </BoxWelcome>
    </>
  );
};
