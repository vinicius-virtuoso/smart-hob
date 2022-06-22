import React, { useState } from "react";
import { Box, Error, FormControl, Icon, Input, LabelName } from "./styles";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

const InputForm = ({ name, type, errors, ...props }) => {
  const [visibility, setVisibility] = useState(false);
  const id = name.toLowerCase();

  return (
    <>
      {props.text && (
        <FormControl errors={errors[id]}>
          <LabelName
            htmlFor={id}
            theme={props.secondary ? "secondary" : "primary"}
            errors={errors[id]}
          >
            {name}
          </LabelName>
          <Input type="text" id={id} errors={errors[id]} {...props} />
          {errors[id]?.message && <Error>{errors[id].message}</Error>}
        </FormControl>
      )}
      {props.password && (
        <FormControl errors={errors[id]}>
          <LabelName
            htmlFor={id}
            theme={props.secondary ? "secondary" : "primary"}
            errors={errors[id]}
          >
            {name}
          </LabelName>
          <Box>
            <Input
              type={visibility ? "text" : "password"}
              id={id}
              errors={errors[id]}
              {...props}
            />
            <Icon
              theme={props.secondary ? "secondary" : "primary"}
              onClick={() => setVisibility(!visibility)}
            >
              {!visibility ? <MdVisibilityOff /> : <MdVisibility />}
            </Icon>
          </Box>
          {errors[id]?.message && <Error>{errors[id].message}</Error>}
        </FormControl>
      )}
    </>
  );
};

export default InputForm;
