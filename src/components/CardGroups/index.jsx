import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/Provider/User";
import { ButtonForm } from "../ButtonForm";
import { Container, TextDiv, ButtonDiv } from "./styles";

const CardGroups = ({ group }) => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (group && user.groups) {
      let isValid = user.groups
        .map((groupMap) => groupMap.id)
        .find((groupFind) => groupFind === group.id);
      console.log(isValid);
    }
  });

  return (
    <Container>
      <TextDiv>
        <h3>Group Name</h3>
        <span>Group Type</span>
        <p>Group Description</p>
      </TextDiv>
      <ButtonDiv>
        <ButtonForm primary>Seguir</ButtonForm>
      </ButtonDiv>
    </Container>
  );
};

export default CardGroups;
