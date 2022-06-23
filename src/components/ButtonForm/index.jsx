import React from "react";
import { ButtonForm as ButtonFormCont } from "./styles";

export const ButtonForm = ({primary,secondary,tertiary,children}) => {
  return (
    <>
      {primary && <ButtonFormCont primary>{children}</ButtonFormCont>}
      {secondary && <ButtonFormCont secondary>{children}</ButtonFormCont>}
      {tertiary && <ButtonFormCont tertiary>{children}</ButtonFormCont>}
    </>
  );
};
