import styled from "styled-components";

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  max-width: 400px;
  position: relative;
`;

export const LabelName = styled.label`
  position: absolute;
  left: 1.5rem;
  top: -10px;
  background: transparent;
  padding: 0 1rem;

  ${(props) =>
    props.theme === "login"
      ? ` 
    background: var(--color-purple);
    color:var(--color-light);
    `
      : ` 
    border-color: var(--color-dark);
    color:var(--color-dark);
   `}
  ${(props) =>
    props.errors &&
    ` 
    color:var(--color-negative);
   `}
`;

export const Input = styled.input`
  width: 100%;
  display: flex;
  height: 3rem;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-width: 2px;
  border-style: solid;
  background: transparent;
  outline: none;

  ${(props) =>
    props.primary &&
    ` 
    border-color: var(--color-light);
    color:var(--color-light);
    `}
  ${(props) =>
    props.secondary &&
    ` 
    border-color: var(--color-dark);
    color:var(--color-dark);
   `}
   ${(props) =>
    props.errors &&
    ` 
    border-color: var(--color-negative);
    color:var(--color-negative);
   `}
`;

export const Error = styled.span`
  color: var(--color-negative);
  margin: 0.2rem 0;
`;
