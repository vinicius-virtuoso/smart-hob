import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Provider/User";
import { api_habits } from "../../services/api";
import { ButtonForm } from "../ButtonForm";
import { Container, TextDiv, ButtonDiv } from "./styles";

const CardGroups = ({ group }) => {
  const { user } = useContext(UserContext);
  const [inGroup, setInGroup] = useState(false);

  useEffect(() => {
    if (group && user.groups) {
      let isValid = user.groups
        .map((groupMap) => groupMap.id)
        .find((groupFind) => groupFind === group.id);

      if (isValid.length > 0) {
        setInGroup(false);
      }
    }
  }, [group, user.groups]);

  const subscribeGroup = (id) => {
    api_habits
      .post(`/groups/${id}/subscribe`, {
        headers: {
          Authorization: `Bearer ${user.user.token}`,
        },
      })
      .then(() => {
        setInGroup(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const unSubscribeGroup = (id) => {
    api_habits
      .delete(`/groups/${id}/unsubscribe`, {
        headers: {
          Authorization: `Bearer ${user.user.token}`,
        },
      })
      .then(() => {
        setInGroup(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container inGroup={inGroup}>
      <TextDiv>
        <h3>Group Name</h3>
        <span>Group Type</span>
        <p>Group Description</p>
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
