import styled from "styled-components";

export const Container = styled.div`
  // ajustado
  width: 100%;
  height: 100%;
  background: var(--color-yellow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // ajustado
  gap: 1rem;
  padding: 2rem;
`;
export const BoxOne = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--fml-Barlow-Condensed);
  color: var(--color-dark);
  font-size: clamp(1.5rem, 8vw, 2.5rem);
  margin-bottom: 1.5rem;
`;
export const BoxRegister = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--fml-Poppins);
  p {
    color: var(--color-gray);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;

    button {
      background: none;
      border: none;
      color: var(--color-gray);
      font-size: 0.875rem;
      margin-left: 5px;
      cursor: pointer;
      color: var(--color-dark);
      font-weight: bold;
      font-family: var(--fml-Poppins);
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  button {
    align-self: center;
  }
`;
