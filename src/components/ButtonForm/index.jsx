import React from "react";
import { ButtonForm as ButtonFormCont } from "./styles";

export const ButtonForm = () => {
  return (
    <div>
      <ButtonFormCont primary>Cadastre-se</ButtonFormCont>
      <ButtonFormCont secondary>Login</ButtonFormCont>
      <ButtonFormCont tertiary>Entrar</ButtonFormCont>
    </div>
  );
};
