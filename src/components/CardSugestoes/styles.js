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

  width: 12rem;
  height: 13rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin: 10px;

  h4 {
    overflow: hidden;
  }

  svg {
    color: var(--color-gray);
    width: 5rem;
  }
  transition: all 0.2s ease;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  &:hover {
    transition: all 0.2s ease;

    top: -5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
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
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 2px solid var(--color-gray);
  border-radius: 0px 0px 10px 10px;

  button {
    width: auto;
    font-size: 14px;
    padding: 0.5rem;
  }
`;
