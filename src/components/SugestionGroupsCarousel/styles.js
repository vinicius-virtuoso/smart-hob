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
  align-items: center;

  button {

    display: contents;
    background-color: transparent;
    border: none;
    margin: 0 30px 0 30px;  
    height: 30px;
    width: 15px;


    svg {
       
      height: 40px;
      width: 100px;
      color: rgba(63, 61, 86, 0.3);

      path {
        cursor: pointer;
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