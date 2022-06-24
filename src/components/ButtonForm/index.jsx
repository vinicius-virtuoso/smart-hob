import React from "react";
import { ButtonForm as ButtonFormCont } from "./styles";

const ButtonForm = () => {
  return (
    <div>
      <ButtonFormCont primary></ButtonFormCont>
      <ButtonFormCont secondary></ButtonFormCont>
      <ButtonFormCont tertiary></ButtonFormCont>
    </div>
  );
};

export default ButtonForm;
