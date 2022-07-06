import ModalUser from "../ModalUser";
import { Nav, Ul, Link, ButtonOut } from "./styles";
import { AiOutlineLogout } from "react-icons/ai";

const MenuDesktop = ({ arr, logout, click, open, handleOpen, setOpen }) => {
  return (
    <>
      <Nav>
        <Ul>
          {arr.map(({ text, link, icon }, index) => {
            return (
              <li key={index}>
                <Link to={link} title={text} onClick={click}>
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
