import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #8798dc;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
  align-items: space-between;
  gap: 1rem;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const Logo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: red;
`;

export const Text = styled.h3`
  color: var(--color-dark);
  font-family: var(--fml-Poppins);
  font-size: 2.5rem;
  align-self: end;
`;
