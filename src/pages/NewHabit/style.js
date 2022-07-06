import styled from "styled-components";

export const HeaderNewTask = styled.div`
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    justify-content: center;
    background-color: var(--color-purple-light);
    img {
      display: none;
    }

    h3 {
      font-size: 12px;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-purple-light);

  img {
    max-width: 1000px;
    width: 400px;
    height: 40vh;
  }

  h3 {
    font-size: clamp(1.5rem, 5vw, 2rem);
    color: var(--color-lightblue);
  }
`;
