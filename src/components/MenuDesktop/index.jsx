import { useState } from "react";
import { ModalUser } from "../ModalUser";
import { Nav, Ul, Link, ButtonOut } from "./styles";
import { AiOutlineLogout } from "react-icons/ai";

const MenuDesktop = ({ arr, logout }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  let word = "Editar perfil";
  const settingsUser = (text) => {
    if (text === word) handleOpen();
  };

  return (
    <>
      <Nav>
        <Ul>
          {arr.map(({ text, link, icon }, index) => {
            return (
              <li key={index}>
                <Link
                  to={link}
                  title={text}
                  onClick={(e) => {
                    if (text === word) e.preventDefault();
                    settingsUser(text);
                  }}
                >
                  {icon && <span className="icon">{icon}</span>}
                  <span className="text">{text}</span>
                </Link>
              </li>
            );
          })}
          <ButtonOut onClick={() => logout()}>
            <span className="icon">
              <AiOutlineLogout />
            </span>
            <span className="text">Sair</span>
          </ButtonOut>
        </Ul>
      </Nav>
      <ModalUser open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </>
  );
};
export default MenuDesktop;
