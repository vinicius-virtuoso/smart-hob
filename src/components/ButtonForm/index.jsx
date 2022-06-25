import React from "react";
import { ButtonForm as ButtonFormCont } from "./styles";

export const ButtonForm = ({
  primary,
  secondary,
  tertiary,
  type,
  children,
  onClick,
}) => {
  return (
    <>
      {primary && (
        <ButtonFormCont type={type} primary onClick={onClick}>
          {children}
        </ButtonFormCont>
      )}
      {secondary && (
        <ButtonFormCont type={type} secondary onClick={onClick}>
          {children}
        </ButtonFormCont>
      )}
      {tertiary && (
        <ButtonFormCont type={type} tertiary onClick={onClick}>
          {children}
        </ButtonFormCont>
      )}
    </>
  );
};

export default ButtonForm;
