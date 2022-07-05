import styled from "styled-components";

export const BoxPhrases = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: #fdecc6;
  color: var(--color-purple);
  margin: 0.3rem 0;
  padding: 1rem;

  h5 {
    font-family: var(--fml-Barlow-Condensed);
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 43px;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    font-family: var(--fml-Poppins);
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    color: var(--color-gray);
    
  }

  button {
    top: 10px;
    right: 10px;
    display: flex;
    font-size: 30px;
    background-color: transparent;
    border: none;
    color: var(--color-gray);
    position: absolute;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
  }

  ${(props) =>
    props.isOpen
      ? "display: flex;"
      : "animation: close .3s ease forwards; display:none;"}

  @keyframes close {
    0% {
      opacity: 1;
      height: 100%;
    }

    100% {
      opacity: 0;
      height: 100%;
      overflow: hidden;
    }
  }
`;
