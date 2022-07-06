import { Link } from "react-router-dom";
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
    width: 20%;
    height: 30vh;
  }

  h3 {
    font-size: clamp(1.5rem, 5vw, 2rem);
    color: var(--color-dark);
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
