import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const Nav = styled.nav`
  width: -350px;
  background: white;
  color: rgba(0, 0, 0, 0.87);
  -webkit-clip-path: circle(28px at 30px 24px);
  clip-path: circle(21px at 32px 24px);
  -webkit-transition: -webkit-clip-path 0.5625s, clip-path 0.375s;
  transition: -webkit-clip-path 0.5625s, clip-path 0.375s;
  text-align: right;

  &:hover {
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    -webkit-transition-duration: 1s;
    transition-duration: 0.75s;
    -webkit-clip-path: circle(-390px at -225px 24px);
    clip-path: circle(390px at 150px 24px);
  }
`;

export const Div = styled.div`
  padding: 23px 20px;
  cursor: pointer;
  -webkit-transform-origin: 32px 24px;
  -ms-transform-origin: 32px 24px;
  transform-origin: 32px 24px;

  div {
    position: relative;
    width: 12px;
    height: 2px;
    background: rgba(0, 0, 0, 0.87);

    &::before {
      top: -7px;
    }
    &::after {
      top: 7px;
    }

    &::before,
    &::after {
      display: block;
      content: "";
      width: 20px;
      height: 2px;
      background: rgba(0, 0, 0, 0.87);
      position: absolute;
    }
  }
`;
export const Li = styled.li`
  text-align: left;
  &:hover {
    background: var(--color-yellow);
  }

  &:active {
    background: var(--color-lightblue);
  }

  a {
    display: block;
    line-height: 50px;
    padding: 0 20px;
    color: inherit;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    color: var(--color-dark);
  }
`;
