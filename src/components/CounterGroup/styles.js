import { Link } from "react-router-dom";
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

export const Li = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
  color: #fff;
  font-family: var(--fml-Poppins);
  font-size: 1.2rem;
`;
