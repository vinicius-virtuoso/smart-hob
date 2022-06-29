import styled from "styled-components";

export const Container = styled.div`

  height: 50px;
  background: var(--color-purple);

  p {
    font-family: var(--fml-Poppins);
    text-align: center;
    color: var(--color-white);
    opacity: 0.8;
    font-size: clamp(0.5rem, 20vw, 0.9rem);
  }

`;