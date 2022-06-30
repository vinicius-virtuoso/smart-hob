import MenuDesktop from "../MenuDesktop";
import { Header, Container } from "./styles";
import {
  AiOutlineSearch,
  AiOutlineUsergroupAdd,
  AiOutlineSetting,
} from "react-icons/ai";
import { RiTaskLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { WelcomeLayout } from "../WelcomeUserDisplay";
import { useContext } from "react";
import { UserContext } from "../../Context/Provider/User";

const arr = [
  {
    text: "Pesquisar Grupos",
    link: "/dashboard/procurar-grupos",
    icon: <AiOutlineSearch />,
  },
  {
    text: "Novo Grupo",
    link: "/dashboard/novo-grupo",
    icon: <AiOutlineUsergroupAdd />,
  },
  {
    text: "Criar Atividade",
    link: "/dashboard/criar-atividade",
    icon: <RiTaskLine />,
  },
  {
    text: "Configurações",
    link: "",
    icon: <AiOutlineSetting />,
  },
];

function HeaderContainer() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Header>
      <Container>
        <WelcomeLayout name={user?.user?.username} />
        <MenuDesktop arr={arr} logout={logout} />
      </Container>
    </Header>
  );
}
export default HeaderContainer;
