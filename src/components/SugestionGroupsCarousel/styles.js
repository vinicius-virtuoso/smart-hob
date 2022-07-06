import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 10px 0 10px 0;
  background-color: var(--color-light);
`;

export const Contain = styled.div`
  display: flex;
  width: 100%;
  max-width: 1220px;
  align-items: center;

  button.btn-arrow {
    display: contents;
    background-color: transparent;
    border: none;
    margin: 0 30px 0 30px;
    height: 40px;
    width: 40px;

    svg {
      height: 60px;
      width: 100%;
      max-width: 35px;
      color: var(--color-dark);

      path {
        cursor: pointer;
      }

      @media (min-width: 768px) {
        max-width: 45px;
      }
    }
  }
`;

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 0 10px 0;

  ::-webkit-scrollbar {
    display: none;
  }

  div {
    flex: none;
  }
`;
