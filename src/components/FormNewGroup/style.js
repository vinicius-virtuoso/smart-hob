import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const HeaderForm = styled.div`
  @media (max-width: 400px) {
    background-color: var(--color-yellow);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      font-size: 12px;
    }
  }
  background-color: var(--color-yellow);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    color: var(--color-dark);
  }
`;

export const BoxForm = styled.div`
  @media (max-width: 400px) {
    width: 300px;
  }

  max-width: 800px;
  width: 500px;
  padding: 1rem;
  background-color: var(--color-light);
  display: flex;
  justify-content: center;
  border-radius: 10px;
`;
