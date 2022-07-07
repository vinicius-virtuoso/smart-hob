import { Div, Button, Ul, Menu } from "./styles";

import { useState } from "react";

const MenuHamb = ({ arr }) => {
  const [closeMenu, setCloseMenu] = useState(true);

  if (closeMenu === true) {
    document.querySelector("body").style.overflow = "auto";
  }
  if (closeMenu === false) {
    document.querySelector("body").style.overflow = "hidden";
  }
  return (
    <Div>
      <input
        type="checkbox"
        id="active"
        onClick={() => setCloseMenu(!closeMenu)}
      />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>
      <Menu className="wrapper">
        <Ul>
          {arr.map((el, index) => {
            return (
              <li key={index}>
                <Button onClick={el.click}>
                  <a href={el.link}>{el.text}</a>
                </Button>
              </li>
            );
          })}
        </Ul>
      </Menu>
    </Div>
  );
};
export default MenuHamb;
