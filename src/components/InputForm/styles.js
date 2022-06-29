import styled from "styled-components";

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  max-width: 400px;
  position: relative;
  width: 100%;

  @keyframes shake {
    25% {
      transform: translateX(-10px);
    }
    50% {
      transform: translateX(10px);
    }
    75% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  ${(props) =>
    props.errors
      ? `
    animation: shake 0.2s ease forwards;
   `
      : `animation:none;`}
`;

export const LabelName = styled.label`
  position: absolute;
  left: 1.5rem;
  top: -15px;
  background: transparent;
  padding: 0 1rem;
  z-index: 999;
  font-family: var(--fml-Barlow-Condensed);
  font-size: 1.5rem;

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
    border-color:var(--color-negative);
    color:var(--color-negative);
   `};
`;

export const Input = styled.input`
  width: 100%;
  display: flex;
  height: 3rem;
  border-radius: 1rem;
  padding: 0.5rem 50px 0.5rem 1.5rem;
  font-size: 1rem;
  border-width: 2px;
  border-style: solid;
  background: transparent;
  outline: none;
  transition: all 0.2s ease;
  overflow: hidden;
  z-index: 998;

  ${(props) =>
    props.theme === "secondary" &&
    ` 
      border-color: var(--color-dark);
      color:var(--color-dark);

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px var(--color-yellow) inset;
        color:var(--color-dark);
      }
   `};

  ${(props) =>
    props.theme === "primary" &&
    ` 
      border-color: var(--color-light);
      color:var(--color-light);
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px var(--color-purple) inset;
        -webkit-text-fill-color: var(--color-light);
      }
    `};

  ${(props) =>
    props.errors &&
    "border-color: var(--color-negative);color:var(--color-negative);"}
`;

export const Error = styled.span`
  color: var(--color-negative);
  margin: 0.2rem 0;
  opacity: 0;
  transform: scale(0);
  animation: fadeIn 0.2s ease forwards;

  @keyframes fadeIn {
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 2px;
  width: 50px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;

  svg {
    width: 100%;
    height: 25px;
  }

  ${(props) =>
    props.theme === "primary" &&
    ` 
    color:var(--color-light);
    background:var(--color-purple);
  }
    `}
  ${(props) =>
    props.theme === "secondary" &&
    ` 
    color:var(--color-dark);
    background:var(--color-yellow);
   `}
`;
