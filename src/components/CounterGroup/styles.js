import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #fff;
  font-family: var(--fml-Poppins);
  font-size: 1.2rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
