import styled from "styled-components";

export const Container = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  padding: 10px 0 10px 0;
  background-color: rgba(228, 228, 228, 1);

`;

export const Contain = styled.div`
  
  display: flex;
  max-width: 75vw;

  button {

    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0 30px 0 30px;

    svg {

      height: 60px;
      width: 60px;
      color: rgba(63, 61, 86, 0.3);

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