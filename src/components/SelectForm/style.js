import styled from "styled-components";

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  max-width: 400px;
  position: relative;
  border: ${(props) =>
    props.erro === true
      ? "1px solid var(--color-negative)"
      : "1px solid var(--color-gray)"};
  padding: 1rem;
  margin-top: 20px;
`;

export const LabelSelect = styled.label`
  position: absolute;
  top: -10px;
  padding: 0 20px;
  background-color: var(--color-light);
  color: ${(props) =>
    props.erro === true ? "var(--color-negative)" : "var(--color-gray)"};
  font-family: "Barlow Condensed", sans-serif;
`;

export const AreaSelect = styled.select`
  background: transparent;
  border: none;
  color: var(--color-gray);
  font-size: clamp(1rem, 2vw, 1rem);
  font-family: "Barlow Condensed", sans-serif;
`;

export const OptionSelect = styled.option`
  background-color: var(--light-gray);
  font-size: clamp(1rem, 2vw, 1rem);
  font-family: "Barlow Condensed", sans-serif;
`;

export const MessageErro = styled.p`
  color: var(--color-negative);
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
`;
