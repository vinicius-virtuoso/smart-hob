import styled from "styled-components";

export const PageLogin = styled.section`
  display: grid;
  grid-template-columns: minmax(350px, 400px) 1fr;
  min-height: 100vh;
  background: var(--color-purple);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--bg-gradient-login);

  @media (max-width: 768px) {
    display: none;
  }
`;
