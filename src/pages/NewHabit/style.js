import { Link } from "react-router-dom";
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

export const BackLink = styled(Link)`
  font-size: 1.5rem;
  display: flex;
  max-width: 90px;
  align-items: flex-start;
  color: var(--color-dark);
  font-weight: bold;
  justify-content: space-between;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  span {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
