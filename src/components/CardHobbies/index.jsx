import { Container, ColoredDiv, CardNameDiv } from "./styles";

const CardHobbies = (el) => {
  return (
    <Container id={el.el.id}>
      <ColoredDiv>{/* <img src="" alt="" /> */}</ColoredDiv>
      <CardNameDiv>
        <p>{el.el.title}</p>
      </CardNameDiv>
    </Container>
  );
};

export default CardHobbies;
