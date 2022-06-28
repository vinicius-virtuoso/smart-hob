import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 100%;
  background: var(--color-purple-light);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  align-content: start;

  margin: 0 auto;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

export const Mobile = styled.div`
  display: block;
  width: 1px;
  height: 1px;

  @media (min-width: 768px) {
    display: none;
  }
`;
export const Desktop = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;
