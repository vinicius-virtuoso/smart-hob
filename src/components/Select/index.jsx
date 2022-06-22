import { ContainerSelector } from "./styles";

const SelectForm = ({ datas, label }) => {
  datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ContainerSelector>
      <label>{label}</label>
      <select>
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
