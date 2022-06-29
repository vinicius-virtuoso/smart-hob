import { useState } from "react";
import { ModalUser } from "../ModalUser";
import { Nav, Ul, Link } from "./styles";
import { AiOutlineLogout } from "react-icons/ai";

const MenuDesktop = ({ arr, logout }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  let word = "Configurações";
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
                  className={({ isActive }) => isActive && "active"}
                  title={text}
                  onClick={(e) => {
                    if (text === word) e.preventDefault();
                    settingsUser(text);
                  }}
                >
                  {icon && icon}
                </Link>
              </li>
            );
          })}
          <Link
            to=""
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            <AiOutlineLogout />
          </Link>
        </Ul>
      </Nav>
      <ModalUser open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </>
  );
};
export default MenuDesktop;
