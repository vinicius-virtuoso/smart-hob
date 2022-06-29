import styled from "styled-components";

export const ContainerCardSujests = styled.div`
  @media (max-width: 400px) {
    width: 10rem;
    height: 10rem;
    font-size: 12px;

    svg {
      width: 100px;
    }
  }

  max-width: 13rem;
  height: 13rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin: 10px;

  svg {
    color: var(--color-gray);
    width: 5rem;
  }
`;

export const FigcaptionCardSujests = styled.div`
  /* @media (max-width: 400px) {
    button {
      font-size: 8px;
    }
  } */

  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border: 2px solid var(--color-gray);
  border-radius: 0px 0px 10px 10px;

  button {
    width: 8rem;
    font-size: 14px;
  }
`;
