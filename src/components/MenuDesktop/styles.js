import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Ul = styled.ul`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  li {
    height: 70px;
    display: flex;
    align-items: center;
  }
`;

export const Link = styled(NavLink)`
  height: 45px;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  color: var(--color-dark);
  font-family: var(--fml-Barlow-Condensed);
  font-weight: 700;
  position: relative;
  transition: all 0.5s;
  z-index: 1;
  gap: 0.2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    height: 100%;
    background-color: #fff;
    z-index: -1;
    transition: all 0.5s;
  }
  &:hover::before {
    width: 100%;
  }
  &:hover {
    color: var(--color-dark);
  }
  &:active:before {
    background: var(--color-dark);
  }
  p {
    &:nth-child(1) {
      transform: translateY(3px);
    }
  }

  .active {
    background: var(--color-light);
  }
`;
