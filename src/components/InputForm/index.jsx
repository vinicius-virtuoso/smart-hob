import React from "react";
import { Error, FormControl, Input, LabelName } from "./styles";

const InputForm = ({ name, type, login, cadastro, errors, ...props }) => {
  const id = name.toLowerCase();

  return (
    <FormControl errors={errors[id]}>
      <LabelName
        htmlFor={id}
        theme={login ? "login" : "cadastro"}
        errors={errors[id]}
      >
        {name}
      </LabelName>
      <Input type={type} id={id} errors={errors[id]} {...props} />
      {errors[id]?.message && <Error>{errors[id].message}</Error>}
    </FormControl>
  );
};

export default InputForm;
