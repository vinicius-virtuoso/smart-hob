import { forwardRef, useState } from "react";
import { Box, Error, FormControl, Icon, Input, LabelName } from "./styles";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

const InputForm = ({ name, label, type, errors, register, ...props }, ref) => {
  const [visibility, setVisibility] = useState(false);
  const id = name.toLowerCase();

  return (
    <>
      {type !== "password" && (
        <FormControl errors={errors}>
          <LabelName
            htmlFor={id}
            theme={props.theme || "primary"}
            errors={errors}
          >
            {label}
          </LabelName>
          <Input
            type={type}
            id={id}
            theme={props.theme || "primary"}
            errors={errors}
            {...register(name)}
            {...props}
          />
          {errors?.message && <Error>{errors.message}</Error>}
        </FormControl>
      )}
      {type === "password" && (
        <FormControl errors={errors}>
          <LabelName
            htmlFor={id}
            theme={props.theme || "primary"}
            errors={errors}
          >
            {label}
          </LabelName>
          <Box>
            <Input
              type={visibility ? "text" : "password"}
              id={id}
              theme={props.theme || "primary"}
              errors={errors}
              {...register(name)}
              {...props}
            />
            <Icon
              theme={props.theme || "primary"}
              onClick={() => setVisibility(!visibility)}
            >
              {!visibility ? <MdVisibilityOff /> : <MdVisibility />}
            </Icon>
          </Box>
          {errors?.message && <Error>{errors.message}</Error>}
        </FormControl>
      )}
    </>
  );
};

export default forwardRef(InputForm);
