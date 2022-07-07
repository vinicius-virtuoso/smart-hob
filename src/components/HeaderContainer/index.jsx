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
import { ModalUser } from "../ModalUser";

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
    link: "",
    icon: <AiOutlineUser />,
    click: null
  },
];





function HeaderContainer() {
  const [mobile, setMobile] = useState(window.screen.width <= 768);
  const navigate = useNavigate();
  const { user, userGroups, userHobbies } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  

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
  
  

  // const arrMobile = [...arr];
  // const arrMobile = arr.map(el => el)
  const arrMobile = JSON.parse(JSON.stringify(arr))

  arrMobile.push({
    text: "Sair",
    link: "",
    click: logout,
  }
  )
  arrMobile[3].link = null;
  arrMobile[3].click = handleOpen
  
  return (
    <Header>
      <Container>
        <Box>
          <WelcomeLayout name={user?.username} />
          {mobile ? (
            <MenuHamb arr={arrMobile} />
          ) : (
            <MenuDesktop arr={arr} logout={logout} onClick={logout} />
          )}
        </Box>
        <CounterGroup userGroups={userGroups} userHobbies={userHobbies} />
        <ModalUser open={open} setOpen={setOpen} handleOpen={handleOpen} />
      </Container>
    </Header>
  );
}
export default HeaderContainer;
