import styled from "styled-components";

export const Container = styled.div`
  border-radius: 5px;
  width: 150px;
  height: 100px;
  margin: 12.5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;

export const ColoredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75%;
  background: #accafb;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const CardNameDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 25%;
  font-weight: bold;
  font-size: clamp(0.5rem, 20vw, 0.8rem);
  border-right: 1px solid var(--bor-grey);
  border-bottom: 1px solid var(--bor-grey);
  border-left: 1px solid var(--bor-grey);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: white;

  p {
    display: flex;
    text-align: center;
  }
`;
