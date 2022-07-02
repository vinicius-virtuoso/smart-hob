import { Container, ColoredDiv, CardNameDiv } from "./styles";

const CardHobbies = ({ id,name }) => {
  console.log(name)
  return (
    <Container key={id}>
      <ColoredDiv>{/* <img src="" alt="" /> */}</ColoredDiv>
      <CardNameDiv>
        <p>{name}</p>
      </CardNameDiv>
    </Container>
  );
};

export default CardHobbies;
