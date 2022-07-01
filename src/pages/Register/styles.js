import styled from "styled-components";

export const PageRegister = styled.section`
  display: grid;
  grid-template-columns: 1fr minmax(350px, 400px);
  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Box2 = styled.div`
  width: 100%;
  height: 100vh;
`;
