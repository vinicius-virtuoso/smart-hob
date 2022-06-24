import React from "react";
import { ButtonForm as ButtonFormCont } from "./styles";

export const ButtonForm = ({
  primary,
  secondary,
  tertiary,
  type,
  children,
}) => {
  return (
    <>
      {primary && (
        <ButtonFormCont type={type} primary>
          {children}
        </ButtonFormCont>
      )}
      {secondary && (
        <ButtonFormCont type={type} secondary>
          {children}
        </ButtonFormCont>
      )}
      {tertiary && (
        <ButtonFormCont type={type} tertiary>
          {children}
        </ButtonFormCont>
      )}
    </>
  );
};

export default ButtonForm;
