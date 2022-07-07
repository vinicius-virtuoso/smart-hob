import { Link } from "react-router-dom";
import { Container, ColoredDiv, CardNameDiv } from "./styles";

const CardHobbies = (el) => {
  const filter = el.el.achieved === false;

  return (
    filter && (
      <Container id={el.el.id}>
        <Link to={`/dashboard/editar-atividade/${el.el.id}`}>
          <ColoredDiv>{/* <img src="" alt="" /> */}</ColoredDiv>
          <CardNameDiv>
            <p>{el.el.category}</p>
          </CardNameDiv>
        </Link>
      </Container>
    )
  );
};

export default CardHobbies;
