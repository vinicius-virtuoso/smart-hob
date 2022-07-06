import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const BoxForm = styled.div`
  @media (max-width: 400px) {
    width: 300px;
  }

  max-width: 800px;
  width: 500px;
  padding: 1rem;
  background-color: var(--color-light);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const FormNG = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
