import {
  Box,
  BoxLink,
  ContainerForm,
  ContainerInputs,
  FormComponent,
  TitleForm,
} from "./styles";
import { Link } from "react-router-dom";

const Form = ({ title, theme, children, onSubmit }) => {
  return (
    <FormComponent onSubmit={onSubmit}>
      <ContainerForm>
        <Box>
          <TitleForm theme={theme || "primary"}>{title}</TitleForm>
        </Box>
        <ContainerInputs>{children}</ContainerInputs>
        <button type="submit">
          <p>Entrar</p>
        </button>
        {title.toLowerCase() === "cadastre-se" ? (
          <BoxLink secondary>
            Já tem um Cadastro?
            <Link to={"/login"}>Faça seu Login.</Link>
          </BoxLink>
        ) : (
          <BoxLink primary>
            Ainda não tem o Cadastro?
            <div>
              <p>Então</p>
              <Link to={"/register"}>Cadastre-se.</Link>
            </div>
          </BoxLink>
        )}
      </ContainerForm>
    </FormComponent>
  );
};

export default Form;
