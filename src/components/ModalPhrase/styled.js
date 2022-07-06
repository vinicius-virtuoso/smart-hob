import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--color-pink-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.25rem;
`;
export const Div = styled.div`
  min-height: 150px;
  width: 95%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: var(--fml-Poppins);
    h5 {
      font-size: clamp(1.3rem, 15vw, 1.6rem);
      margin-bottom: 15px;
      color: var(--color-purple);
    }
    p {
      color: var(--color-dark);
      font-weight: bold;
      letter-spacing: 0.05em;
      font-size: clamp(1rem, 15vw, 1.2rem);
      text-align: center;
    }
  }

  button {
    margin-top: 10px;
    width: 100%;
    background: none;
    cursor: pointer;
    border: none;
    font-size: 25px;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: end;
    p {
      display: flex;
      align-items: center;
      justify-content: end;
      color: var(--color-gray);
    }
  }
`;
