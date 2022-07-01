import { Container, ColoredDiv, CardNameDiv } from "./styles";

const CardHobbies = ({ group }) => {
  return (
    <Container>
      <ColoredDiv>{/* <img src="" alt="" /> */}</ColoredDiv>
      <CardNameDiv>
        <p>{group.category}</p>
      </CardNameDiv>
    </Container>
  );
};

export default CardHobbies;
