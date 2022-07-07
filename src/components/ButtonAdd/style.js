import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  padding: 0.5rem 1rem;
  width: 100%;
  max-width: 100%;
  font-weight: bold;
  font-family: var(--fml-Poppins);
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
 
  ${(props) =>
    props.theme === "primary" &&
    "background:var(--color-gray); color:var(--color-light);"}
  ${(props) =>
    props.theme === "secondary" &&
    "background:var(--color-gray-50); color:var(--color-gray);"}
    ${(props) =>
    props.theme === "tertiary" &&
    "background:transparent; color:var(--color-gray);"}


    ${(props) => props.size === "small" && "font-size:2.5rem;max-width:3.5rem;"}
    ${(props) => props.size === "medium" && "font-size:3rem;max-width:7.5rem;"}
    ${(props) => props.size === "large" && "font-size:4rem;max-width:12.5rem;"};

  &:hover {
    opacity: 0.6;
  }
`;
