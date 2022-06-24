import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--color-yellow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 0.5em;
`;
export const BoxOne = styled.div`
  width: 95%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--fml-Barlow-Condensed);
  color: var(--color-dark);
  font-size: clamp(1.5rem, 8vw, 2.5rem);
`;
export const BoxRegister = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--fml-Poppins);
  p {
    color: var(--color-gray);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    button {
      background: none;
      border: none;
      color: var(--color-gray);
      font-size: 16px;
      margin-left: 5px;
      span {
        cursor: pointer;
        margin-left: 2.5px;
        color: var(--color-dark);
        font-weight: bold;
        font-size: 1.05rem;
      }
    }
  }
`;

export const Form = styled.form`
  height: 350px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
`;
