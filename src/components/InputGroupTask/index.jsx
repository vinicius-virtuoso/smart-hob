import { AreaInput, ContainerInput, LabelInput } from "./style";

const InputGroupTask = ({ label, name, register, size, ...rest }) => {
  return (
    <ContainerInput>
      <LabelInput> {label} </LabelInput>
      <AreaInput type="text" name={name} {...rest} height={size} />
    </ContainerInput>
  );
};

export default InputGroupTask;
