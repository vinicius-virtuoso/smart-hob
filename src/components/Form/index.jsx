import {
  Box,
  BoxLink,
  ContainerForm,
  ContainerInputs,
  FormComponent,
  TitleForm,
} from "./styles";
import { Link } from "react-router-dom";

const Form = ({ title, children, onSubmit }) => {
  return (
    <FormComponent onSubmit={onSubmit}>
      <ContainerForm>
        <Box>
          <TitleForm>{title}</TitleForm>
        </Box>
        <ContainerInputs>{children}</ContainerInputs>
        <button type="submit">
          <p>Cadastrar</p>
        </button>
        {title === "cadastre-se" ? (
          <BoxLink>
            Já tem um Cadastro?
            <Link to={"/login"}>Faça seu Login.</Link>
          </BoxLink>
        ) : (
          <BoxLink>
            Ainda não tem o Cadastro?
            {/* <Link to={"/register"}>Então Cadastre-se.</Link> */}
          </BoxLink>
        )}
      </ContainerForm>
    </FormComponent>
  );
};

export default Form;
