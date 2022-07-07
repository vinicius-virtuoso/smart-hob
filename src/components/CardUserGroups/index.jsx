import { useContext } from "react";
import { api_habits } from "../../services/api";
import { ButtonForm } from "../ButtonForm";
import { ContainerCardSujests, FigcaptionCardSujests } from "./styles";
import {
  GiMeditation,
  GiPaintBrush,
  GiTheaterCurtains,
  GiAmericanFootballBall,
  GiWeightLiftingUp,
  GiMusicalScore,
  GiTheater,
  GiCook,
  GiChessPawn,
} from "react-icons/gi";

import { RiMovie2Fill } from "react-icons/ri";
import { MdCardTravel } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoLibrarySharp } from "react-icons/io5";
import { UserContext } from "../../Context/Provider/User";

function CardUserGroups({ el }) {

  const { userGroups, setUserGroups, token } = useContext(UserContext);


  const icons = {
    Meditação: <GiMeditation size={200} />,
    Pintura: <GiPaintBrush size={200} />,
    "Aulas de teatro": <GiTheater size={200} />,
    Esporte: <GiAmericanFootballBall size={200} />,
    Academia: <GiWeightLiftingUp size={200} />,
    Música: <GiMusicalScore size={200} />,
    Dança: <GiTheaterCurtains size={200} />,
    Leitura: <IoLibrarySharp size={200} />,
    "Artes Visuais": <RiMovie2Fill size={200} />,
    Culinária: <GiCook size={200} />,
    "Jogos de Tabuleiro": <GiChessPawn size={200} />,
    "Passeios e/ou Viagens": <MdCardTravel size={200} />,
  };

  const subscribeGroup = (id) => {
    api_habits
      .post(`/groups/${id}/subscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const unsubscribeGroup = (id) => {
    api_habits
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let remove_group = userGroups.filter((group) => group.id !== id);
        setUserGroups(remove_group);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ContainerCardSujests>
      {icons[el.category] || <BsQuestionCircleFill size={200} />}

      <FigcaptionCardSujests>
        <h4>{el.name}</h4>

        {userGroups.find((sub) => el.id === sub.id) ? (
          <ButtonForm
            tertiary
            onClick={() => {
              unsubscribeGroup(el.id);
            }}
          >
            Seguindo
          </ButtonForm>
        ) : (
          <ButtonForm
            secondary
            onClick={() => {
              subscribeGroup(el.id);
            }}
          >
            Seguir
          </ButtonForm>
        )}
      </FigcaptionCardSujests>
    </ContainerCardSujests>
  );
}

export default CardUserGroups;
