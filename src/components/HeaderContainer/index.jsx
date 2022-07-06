import MenuDesktop from "../MenuDesktop";
import { Header, Container, Box } from "./styles";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

import { RiTaskLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { WelcomeLayout } from "../WelcomeUserDisplay";
import { useContext, useState } from "react";
import { UserContext } from "../../Context/Provider/User";
import CounterGroup from "../CounterGroup";
import MenuHamb from "../MenuHamb";

function HeaderContainer() {
  const [mobile, setMobile] = useState(window.screen.width <= 768);
  const navigate = useNavigate();
  const { user, userGroups, userHobbies } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const arr = [
    {
      text: "Pesquisar Grupos",
      link: "/dashboard/procurar-grupos",
      icon: <AiOutlineSearch />,
    },
    {
      text: "Criar Grupo",
      link: "/dashboard/criar-grupos",
      icon: <AiOutlineUsergroupAdd />,
    },
    {
      text: "Criar Atividade",
      link: "/dashboard/criar-atividade",
      icon: <RiTaskLine />,
    },
    {
      text: "Editar perfil",
      icon: <AiOutlineUser />,
    },
  ];

  window.addEventListener("resize", () => {
    if (window.screen.width <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const arrMobile = [...arr];

  arrMobile.push({
    text: "Sair",
    link: "",
    click: logout,
  });

  console.log(arrMobile);

  return (
    <Header>
      <Container>
        <Box>
          <WelcomeLayout name={user?.username} />
          {mobile ? (
            <MenuHamb arr={arrMobile} handleOpen={handleOpen} />
          ) : (
            <MenuDesktop
              arr={arr}
              logout={logout}
              onClick={logout}
              open={open}
              setOpen={setOpen}
              click={handleOpen}
            />
          )}
        </Box>
        <CounterGroup userGroups={userGroups} userHobbies={userHobbies} />
      </Container>
    </Header>
  );
}
export default HeaderContainer;
