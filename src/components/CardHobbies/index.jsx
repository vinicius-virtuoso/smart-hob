import { Container, ColoredDiv, CardNameDiv } from "./styles";

const CardHobbies = (el) => {
  return (
    <Container id={el.el.id}>
      <ColoredDiv>{el.el.title}</ColoredDiv>
      <CardNameDiv>
        <p>{el.el.category}</p>
      </CardNameDiv>
    </Container>
  );
};

export default CardHobbies;
