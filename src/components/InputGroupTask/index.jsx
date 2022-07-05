import { AreaInput, ContainerInput, LabelInput, MessageErro } from "./style";

const InputGroupTask = ({
  label,
  name,
  register,
  erro,
  messageErro,
  size,
  ...rest
}) => {
  return (
    <>
      <ContainerInput erro={erro}>
        <LabelInput erro={erro}> {label} </LabelInput>
        <AreaInput
          type="text"
          name={name}
          {...rest}
          height={size}

          {...register(`${name}`)}

        />
      </ContainerInput>
      <MessageErro>{erro && messageErro}</MessageErro>
    </>
  );
};

export default InputGroupTask;
