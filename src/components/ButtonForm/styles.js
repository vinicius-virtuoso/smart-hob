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
  position: relative;  
   

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
    border: 2px solid transparent;

    `}

    ${(props) =>
    props.tertiary &&
    `
    background-color: var(--color-yellow);
    color: var(--color-dark);
    border: 2px solid transparent;
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
    border: solid 2px var(--color-yellow);  
    &::after{
    content: "Deixar de Seguir";
    width: 100px;
    height: 25px;
    font-size: 10px;
    position: absolute;
    top: 50px;
    left: 50%;
    color:var(--color-white);
    z-index: 10;
    background: hsla(0, 77%, 53%, 0.9);
    border-radius: 10px;
    font-weight: bold; 
    transform: translateX(-50%);

  }

    
    
    `}

  }
`;
