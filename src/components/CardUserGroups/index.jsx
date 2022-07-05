import { useState } from "react";
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

function CardUserGroups({ el }) {
  const token = localStorage.getItem("@Smart-hob/token");

  // console.log(token);

  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [subscriptions, setSubscriptions] = useState([]);

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

  //   const subscriptionsGroups = (id) => {
  //     api_habits
  //       .get(`groups/subscriptions/`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => setSubscriptions(res.data))
  //       .catch((err) => console.log(err));
  //   };

  const unsubscribeGroup = (id) => {
    api_habits
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //   useEffect(() => {
  //     listGroup();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   useEffect(() => {
  //     subscriptionsGroups();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [subscriptionsGroups()]);

  return (
    <ContainerCardSujests>
      {icons[list.category] || <BsQuestionCircleFill size={200} />}

      <FigcaptionCardSujests>
        <h4>{el.name}</h4>

        {subscriptions.find((sub) => list.id === sub.id) ? (
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
