import styled from "styled-components";

export const BoxWelcome = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: #8798DC;
  color: #FFFFFF;
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    height: 100%;

    img {
      border-radius: 100%;
      width: 150px ;
      height: 150px;
      object-fit: cover;
    }

    h4 {
      font-family: var(--fml-Fascinate);
      font-style: normal;
      font-weight: 900;
      font-size: 35px;
      letter-spacing: 5px;
      text-align: center;
      margin-left: 20px;
    }
  }
`;
