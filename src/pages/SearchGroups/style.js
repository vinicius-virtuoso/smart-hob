import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-rows: minmax(140px, 150px) auto 100px 40px;
  min-height: 100vh;
  background-color: var(--color-white);

  div.add {
    width: 100%;
    background-color: var(--color-white);
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;

    button {
      max-width: 200px;
    }
  }

  @media (max-width: 768px) {
    grid-template-rows: minmax(100px, 100px) 1fr 40px;
  }
`;

export const ContentSearch = styled.section`
  width: 100%;
  height: 100%;
  background: var(--color-white);

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1220px;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    text-align: center;
    margin: 4rem;
    color: var(--color-purple);

    @media (max-width: 768px) {
      font-size: 2rem;
      margin: 2.5rem;
    }
  }
`;

export const BoxPage = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  span {
    font-size: 1rem;
    text-transform: uppercase;
  }
`;

export const Prev = styled.button`
  border: 0;
  font-size: 1.2rem;
  padding: 0.5rem;
  max-width: 150px;
  background: var(--color-dark);
  color: var(--color-white);
  border-radius: 0.25rem;
`;

export const Next = styled(Prev)``;
