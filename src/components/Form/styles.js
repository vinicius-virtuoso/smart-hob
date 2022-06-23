import styled from "styled-components";

export const FormComponent = styled.form`
  padding: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px 0.25rem rgba(0, 0, 0, 0.2);
`;

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
  width: 100%;
`;
export const TitleForm = styled.h3`
  font-family: var(--fml-Barlow-Condensed);
  color: var(--color-dark);
  font-size: clamp(1.5rem, 8vw, 2.5rem);
  letter-spacing: 1px;

  ${(props) =>
    props.theme === "primary"
      ? "color: var(--color-light);"
      : "color: var(--color-dark);"}
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  align-items: center;
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

export const BoxLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.875rem;

  a {
    font-size: 0.875rem;
    font-weight: 700;
    ${(props) =>
      props.primary
        ? "color: var(--color-purple);"
        : "color: var(--color-yellow);"}
  }
`;
