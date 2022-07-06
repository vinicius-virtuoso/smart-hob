import React from "react";
import { ButtonForm as ButtonFormCont } from "./styles";

export const ButtonForm = ({
  primary,
  secondary,
  tertiary,
  type,
  children,  
  ...rest
}) => {
  return (
    <>
      {primary && (
        <ButtonFormCont type={type} primary {...rest}>
          {children}
        </ButtonFormCont>
      )}
      {secondary && (
        <ButtonFormCont type={type} secondary {...rest}>
          {children}
        </ButtonFormCont>
      )}
      {tertiary && (
        <ButtonFormCont type={type} tertiary {...rest}>
          {children}
        </ButtonFormCont>
      )}
    </>
  );
};

export default ButtonForm;
