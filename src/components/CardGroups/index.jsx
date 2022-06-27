import { ButtonForm } from "../ButtonForm";
import { Container, TextDiv, ButtomDiv } from "./styles";

const CardGroups = () => {
  return (
    <Container>
      <TextDiv>
        <h3>Group Name</h3>
        <span>Group Type</span>
        <p>Group Description</p>
      </TextDiv>
      <ButtomDiv>
        <ButtonForm primary>Seguir</ButtonForm>
      </ButtomDiv>
    </Container>
  );
};

export default CardGroups;
