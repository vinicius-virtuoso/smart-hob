import styled from "styled-components";

export const BoxPhrases = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: #fdecc6;
  color: var(--color-purple);

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
`;
