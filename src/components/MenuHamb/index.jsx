import { Nav, Div, Section, Li } from "./styles";
import { NavLink } from "react-router-dom";

const MenuHamb = ({ arr }) => {
  return (
    <Section>
      <Nav>
        <Div>
          <div></div>
        </Div>
        {arr.map((el, index) => {
          return (
            <ul key={index}>
              <Li>
                <NavLink to={el.link}>{el.text}</NavLink>
              </Li>
            </ul>
          );
        })}
      </Nav>
    </Section>
  );
};
export default MenuHamb;
