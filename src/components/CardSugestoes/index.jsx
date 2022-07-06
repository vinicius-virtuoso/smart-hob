import { useContext, useEffect, useState } from "react";
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

const CardSugestoes = ({ card }) => {
  const { token, userGroups, get_user_groups } = useContext(UserContext);
  const [isSubscribed, setIsSubscribed] = useState(false);

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

  useEffect(() => {
    if (userGroups) {
      setIsSubscribed(userGroups.find((subs) => subs.id === card.id));
    }
  }, [card.id, userGroups]);

  const subscribeGroup = (data) => {
    api_habits
      .post(`groups/${card.id}/subscribe/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        get_user_groups();
        setIsSubscribed(true);
      })
      .catch((err) => console.log(err));
  };

  const unsubscribeGroup = () => {
    api_habits
      .delete(`groups/${card.id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        get_user_groups();
        setIsSubscribed(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ContainerCardSujests>
      {icons[card.category] || <BsQuestionCircleFill size={200} />}

      <FigcaptionCardSujests>
        <h4>{card.name}</h4>

        {isSubscribed ? (
          <ButtonForm
            tertiary
            onClick={() => {
              unsubscribeGroup();
            }}
          >
            Seguindo
          </ButtonForm>
        ) : (
          <ButtonForm
            secondary
            onClick={() => {
              subscribeGroup();
            }}
          >
            Seguir
          </ButtonForm>
        )}
      </FigcaptionCardSujests>
    </ContainerCardSujests>
  );
};

export default CardSugestoes;
