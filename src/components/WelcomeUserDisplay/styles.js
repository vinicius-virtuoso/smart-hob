import styled from "styled-components";

export const BoxWelcome = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-purple-light);
  color: var(--color-dark);

  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: flex-start;
    width: 100%;
    height: 100%;

    h4 {
      font-family: var(--fml-Fascinate);
      font-style: normal;
      font-size: 1rem;
      letter-spacing: 1px;
      text-align: center;
      align-self: center;
    }
    svg {
      animation: rote 20s infinite;
      transform-origin: center;
      transition-property: center;
    }

    @keyframes rote {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @media (max-width: 768px) {
      gap: 0.5rem;

      h4 {
        font-size: 0.775rem;
      }
    }
  }
`;
