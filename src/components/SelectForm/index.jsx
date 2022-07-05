import {
  AreaSelect,
  ContainerSelect,
  LabelSelect,
  MessageErro,
  OptionSelect,
} from "./style";

const SelectForm = ({
  datasArray,
  label,
  error,
  register,
  nameSelect,
  erro,
  messageErro,
  ...rest
}) => {
  return (

    <>
      <ContainerSelect erro={erro}>
        <LabelSelect erro={erro}>{label}</LabelSelect>
        <AreaSelect
          name="selectForm"
          id="selectForm"
          {...register(nameSelect)}
          {...rest}
        >
          <OptionSelect value="">Selecione</OptionSelect>
          {datasArray.map((data, index) => (

            <OptionSelect key={index} value={data}>
              {data}
            </OptionSelect>
          ))}

        </AreaSelect>
      </ContainerSelect>
      <MessageErro>{erro && messageErro}</MessageErro>
    </>

  );
};

export default SelectForm;
