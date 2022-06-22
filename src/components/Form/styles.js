import styled from "styled-components";

export const FormComponent = styled.form``;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--color-yellow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const TitleForm = styled.h3`
  font-family: var(--fml-Barlow-Condensed);
  color: var(--color-dark);
  font-size: clamp(1.5rem, 8vw, 2.5rem);
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Box = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BoxRegister = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--fml-Poppins);
`;

export const BoxLink = styled.div``;
