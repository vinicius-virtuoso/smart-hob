import styled from "styled-components";

export const InputControl = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

export const ContainerInput = styled.div`
  position: relative;
  @media (max-width: 400px) {
    width: 250px;
  }
  display: flexbox;
  flex-direction: column;
  border-radius: 1rem;
  max-width: 400px;
  width: 400px;
  border: ${(props) =>
    props.erro === true
      ? "1px solid var(--color-negative)"
      : "1px solid var(--color-gray)"};
  padding: 0.5rem 1rem;
  margin: 10px 0;
  font-family: "Barlow Condensed", sans-serif;
`;

export const LabelInput = styled.label`
  position: absolute;
  top: -15px;
  padding: 0 20px;
  background-color: var(--color-light);
  color: ${(props) =>
    props.erro === true ? "var(--color-negative)" : "var(--color-gray)"};
  font-family: "Barlow Condensed", sans-serif;
`;

export const AreaInput = styled.input`
  width: 100%;
  max-width: 100%;
  outline: none;

  height: ${(props) => (props.height ? props.height : "1.5rem")};
  background-color: transparent;
  border: none;
  padding: 5px;
  border-radius: 5px;

  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
  min-height: 38px;
`;

export const MessageErro = styled.p`
  color: var(--color-negative);
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
`;
