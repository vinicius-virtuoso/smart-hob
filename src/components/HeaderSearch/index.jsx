import { Header, BackLink, Flex, Container, Input } from "./styles";
import { MdOutlineArrowBackIosNew, MdOutlineSearch } from "react-icons/md";

function HeaderSearch({ text, setText }) {
  return (
    <Header>
      <BackLink to="/dashboard">
        <span>
          <MdOutlineArrowBackIosNew /> Voltar
        </span>
      </BackLink>
      <Container>
        <Flex>
          <Input
            type="text"
            placeholder="Pesquisar Grupos"
            onChange={({ target }) => setText(target.value)}
            value={text}
          />
          <MdOutlineSearch />
        </Flex>
      </Container>
    </Header>
  );
}

export default HeaderSearch;
