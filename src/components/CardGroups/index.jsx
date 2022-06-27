import { ButtonForm } from "../ButtonForm";
import { Container, TextDiv, ButtomDiv } from "./styles";

const CardGroups = () => {
  return (
    <Container>
      <TextDiv>
        <h4>Group Name</h4>
        <h5>Group Type</h5>
        <h6>Group Description</h6>
      </TextDiv>
      <ButtomDiv>
        <ButtonForm primary>Seguir</ButtonForm>
      </ButtomDiv>
    </Container>
  );
};

export default CardGroups;
