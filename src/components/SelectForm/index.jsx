import { forwardRef } from "react";
import {
  AreaSelect,
  ContainerSelect,
  LabelSelect,
  OptionSelect,
} from "./style";

const SelectForm = ({ datasArray, label, error, ...rest }, ref) => {
  return (
    <ContainerSelect>
      <LabelSelect htmlFor="selectForm">{label}</LabelSelect>
      <AreaSelect name="selectForm" id="selectForm" {...rest}>
        <OptionSelect disabled>Selecione</OptionSelect>
        {datasArray.map((data, index) => (
          <OptionSelect key={index} value={data}>
            {data}
          </OptionSelect>
        ))}
      </AreaSelect>
    </ContainerSelect>
  );
};

export default forwardRef(SelectForm);
