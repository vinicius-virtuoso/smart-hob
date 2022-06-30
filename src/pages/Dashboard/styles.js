import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-rows: minmax(140px, 150px) 1fr 40px;
  min-height: 100vh;
`;

export const Content = styled.section`
  width: 100%;
  height: 100%;
  background: var(--color-light);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
