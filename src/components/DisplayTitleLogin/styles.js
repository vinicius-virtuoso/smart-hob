import styled from "styled-components";

export const ContainerLogin = styled.div`

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  width: 100%;

`
export const DivTitle = styled.div`

  text-align: center;

  h1 {
    font-size: clamp(1.5rem, 8vw, 2.8rem);
    font-family: var(--fml-Fascinate);
    color: var(--color-dark);
    margin-bottom: 5px;
  }

  p {
    color: var(--color-dark);
    opacity: 0.8;
    font-family: var(--fml-Poppins);
    font-size: clamp(0.5rem, 20vw, 1.1rem);
    text-align: center;
  }

`

export const DivImg = styled.div`
  
  img {
    width: clamp(80%, 50vw, 100%); 
  }

`


