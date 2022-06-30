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

  align-items: center;

  li {
    height: 70px;
    display: flex;
    align-items: center;
  }
`;

export const Link = styled(NavLink)`
  height: 70px;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  color: var(--color-dark);
  font-family: var(--fml-Barlow-Condensed);
  font-weight: 700;
  position: relative;
  text-align: center;
  border-radius: 5px;

  z-index: 1;
  min-width: 90px;
  white-space: nowrap;

  overflow: hidden;

  span:not(.icon) {
    color: white;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0px;
    height: 100%;
    background: var(--color-purple);

    transition: all 0.3s ease;
    z-index: -1;
  }

  .text {
    width: 0px;
    overflow: hidden;
    opacity: 0;
    letter-spacing: 1px;
  }

  &:hover::before {
    width: 100%;
  }
  svg {
    transition: all 0.2s;
  }

  &:hover {
    color: var(--color-white);
    min-width: 150px;
    font-size: 1rem;
    gap: 0rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  &:hover .icon {
    width: 0px;
    overflow: initial;
    opacity: 0;
  }
  &:hover .text {
    width: 100%;
    overflow: initial;
    opacity: 1;
  }

  &:active:before {
    background: var(--color-purple);
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

export const ButtonOut = styled.button`
  height: 70px;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 2rem;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  color: var(--color-dark);
  font-family: var(--fml-Barlow-Condensed);
  font-weight: 700;
  position: relative;
  width: 100%;

  z-index: 1;
  min-width: 90px;
  white-space: nowrap;

  overflow: hidden;

  span:not(.icon) {
    color: white;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0px;
    height: 100%;
    background: var(--color-purple);
    border-radius: 5px;
    transition: all 0.3s ease;
    z-index: -1;
  }

  .text {
    width: 0px;
    overflow: hidden;
    opacity: 0;
    letter-spacing: 1px;
  }

  &:hover::before {
    width: 100%;
  }
  svg {
    transition: all 0.2s;
  }

  &:hover {
    color: var(--color-white);
    min-width: 150px;
    font-size: 1rem;
    gap: 0rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  &:hover .text {
    width: 100%;
    overflow: initial;
    opacity: 1;
  }
  &:hover .icon {
    width: 0px;
    overflow: initial;
    opacity: 0;
  }

  &:active:before {
    background: var(--color-purple);
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
