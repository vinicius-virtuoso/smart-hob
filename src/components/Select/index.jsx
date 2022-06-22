import { ContainerSelector } from "./styles";

const SelectForm = ({ datas, label, registerName, register, ...rest }) => {
  return (
    <ContainerSelector>
      <label>{label}</label>
      <select {...register(registerName)} {...rest}>
        <option value="">Selecione</option>
        {datas.map((optionArray, index) => (
          <option value={optionArray} key={index}>
            {optionArray}
          </option>
        ))}
      </select>
    </ContainerSelector>
  );
};

export default SelectForm;
