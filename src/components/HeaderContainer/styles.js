import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  background: #8798dc;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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
