import MenuHamb from "../MenuHamb";
import { Container, Desktop, HeaderComponent, Mobile } from "./styles";

function Header() {
  const arr = [
    { text: "cadastro", link: "/register" },
    { text: "index", link: "/" },
    { text: "login", link: "/login" },
    { text: "login", link: "/login" },
    { text: "login", link: "/login" },
    { text: "login", link: "/login" },
  ];

  return (
    <HeaderComponent>
      <Container>
        <div style={{ height: "30px" }}>header</div>
        <MenuHamb arr={arr} />
      </Container>
    </HeaderComponent>
  );
}
export default Header;
