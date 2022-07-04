import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-rows: minmax(140px, 150px) 1fr 40px;
  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-rows: minmax(100px, 100px) 1fr 40px;
  }
`;

export const Content = styled.section`
  width: 100%;
  height: 100%;
  background: var(--color-white);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Box = styled.div`
  width: 100%;
  background: var(--color-white);
  margin: 80px 0;
`;

export const NoContent = styled.div`
  min-height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-dark);
  font-size: 3rem;
  opacity: 0.5;
`;
