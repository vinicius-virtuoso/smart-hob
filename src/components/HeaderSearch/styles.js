import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: #8798dc;
  display: grid;
`;

export const BackLink = styled(Link)`
  font-size: 1.5rem;
  display: flex;
  max-width: 90px;
  align-items: flex-start;
  color: var(--color-dark);
  font-weight: bold;
  justify-content: space-between;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  span {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  font-size: 2.5rem;
  color: var(--color-white);
  border-bottom: 2px solid var(--color-white);

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 200px;
    border-bottom: 1px solid var(--color-white);
  }
`;

export const Input = styled.input`
  background: transparent;
  border: 0;
  width: 100%;
  padding: 0.5rem 1rem;

  color: var(--color-white);

  font-size: 1.5rem;
  outline: none;

  &::placeholder {
    color: var(--color-white);
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
