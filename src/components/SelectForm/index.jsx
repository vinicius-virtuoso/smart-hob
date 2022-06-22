import {
  AreaSelect,
  ContainerSelect,
  LabelSelect,
  OptionSelect,
} from "./style";

const SelectForm = ({ datasArray, label, error, ...rest }) => {
  return (
    <ContainerSelect>
      <LabelSelect htmlFor="">{label}</LabelSelect>
      <AreaSelect name="selectForm" id="selectForm" {...rest}>
        <OptionSelect value="">Selecione</OptionSelect>
        {datasArray.map((data, index) => (
          <OptionSelect key={index} value={data}>
            {data}
          </OptionSelect>
        ))}
      </AreaSelect>
    </ContainerSelect>
  );
};

export default SelectForm;
