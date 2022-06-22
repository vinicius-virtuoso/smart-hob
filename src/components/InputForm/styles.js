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
  z-index: 999;

  ${(props) =>
    props.theme === "primary" &&
    ` 
    background: var(--color-purple);
    color:var(--color-light);
    `}
  ${(props) =>
    props.theme === "secondary" &&
    ` 
    background:var(--color-yellow);
    color: var(--color-dark);
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
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px var(--color-purple) inset;
  }
    `}
  ${(props) =>
    props.secondary &&
    ` 
    border-color: var(--color-dark);
    color:var(--color-dark);

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px var(--color-yellow) inset;
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

export const Box = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100px;
    height: 50%;
  }

  ${(props) =>
    props.theme === "primary" &&
    ` 
    color:var(--color-light);
  }
    `}
  ${(props) =>
    props.theme === "secondary" &&
    ` 
    color:var(--color-dark);
   `}
`;
