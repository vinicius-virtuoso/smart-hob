import {
  Box,
  BoxLink,
  ContainerForm,
  ContainerInputs,
  FormComponent,
  TitleForm,
} from "./styles";
import { Link } from "react-router-dom";
import { ButtonForm } from "../ButtonForm";

const Form = ({ title, theme, children, onSubmit }) => {
  return (
    <FormComponent onSubmit={onSubmit}>
      <ContainerForm>
        <Box>
          <TitleForm theme={theme || "primary"}>{title}</TitleForm>
        </Box>
        <ContainerInputs>{children}</ContainerInputs>
        {title.toLowerCase() === "cadastre-se" ? (
          <ButtonForm tertiary>Criar</ButtonForm>
        ) : (
          <ButtonForm primary>Entrar</ButtonForm>
        )}

        {title.toLowerCase() === "cadastre-se" ? (
          <BoxLink secondary>
            Já tem um Cadastro?
            <Link to={"/login"}>Faça seu Login.</Link>
          </BoxLink>
        ) : (
          <BoxLink primary>
            Não possui uma conta?
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
