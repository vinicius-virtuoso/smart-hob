import styled from "styled-components";

export const ButtonForm = styled.button`
  width: 100%;
  max-width: 150px;

  min-height: 50px;
  border-radius: 10px;
  font-size: 15px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.primary &&
    `
    background-color: var(--color-light);
    color: var(--color-dark);
    `}

  ${(props) =>
    props.secondary &&
    `
    background-color: var(--color-dark);
    color: var(--color-light);

    `}

    ${(props) =>
    props.tertiary &&
    `
    background-color: var(--color-yellow);
    color: var(--color-dark);
    `}

  &:hover {
    ${(props) =>
      props.primary &&
      `
    background-color: var(--color-dark);
    color: var(--color-light);
    `}

    ${(props) =>
      props.secondary &&
      `
    background-color: var(--color-light);
    color: var(--color-dark);
    border: solid 2px var(--color-dark)
    `
    }

    ${(props) =>
      props.tertiary &&
      `
    background-color: white;
    color: var(--color-yellow);
    border: solid 2px var(--color-yellow)
    `}

  }
`;
