import styled from "styled-components";

export const HeaderForm = styled.div`
  @media (max-width: 400px) {
    background-color: var(--color-yellow);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      display: none;
    }

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

  img {
    width: 30%;
    height: 50vh;
  }

  h3 {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    color: var(--color-dark);
  }
`;
