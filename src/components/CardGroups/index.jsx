import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Provider/User";
import { api_habits } from "../../services/api";
import { ButtonForm } from "../ButtonForm";
import { Container, TextDiv, ButtonDiv } from "./styles";
import { toast } from "react-toastify";

const CardGroups = ({ group, get_groups, get_user_groups }) => {
  const { userGroups, token } = useContext(UserContext);
  const [inGroup, setInGroup] = useState(false);

  useEffect(() => {
    if (group?.id && userGroups) {
      let isValid = userGroups
        .map((groupMap) => groupMap.id)
        .find((groupFind) => groupFind === group.id);

      if (isValid) {
        setInGroup(true);
      }
    }
  }, [group.id, userGroups]);

  const subscribeGroup = (id) => {
    api_habits
      .post(`/groups/${id}/subscribe/`, group, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setInGroup(false);
        get_groups();
        get_user_groups();
        toast.success(`Voce Entrou no do Grupo ${group.name}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 700,
        });
      })
      .catch((e) => {
      });
  };
  const unSubscribeGroup = (id) => {
    api_habits
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setInGroup(false);
        get_groups();
        get_user_groups();
        toast.warning(`Voce Saiu do Grupo ${group.name}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 700,
        });
      })
      .catch((e) => {
      });
  };

  return (
    <Container inGroup={inGroup}>
      <TextDiv>
        <h3>{group.name}</h3>
        <span>{group.category}</span>
        <p>{group.description}</p>
      </TextDiv>
      <ButtonDiv>
        {inGroup ? (
          <ButtonForm tertiary onClick={() => unSubscribeGroup(group.id)}>
            Sair do grupo
          </ButtonForm>
        ) : (
          <ButtonForm secondary onClick={() => subscribeGroup(group.id)}>
            Entrar no grupo
          </ButtonForm>
        )}
      </ButtonDiv>
    </Container>
  );
};

export default CardGroups;
