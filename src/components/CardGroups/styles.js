import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  height: 100%;
  background-color: var(--color-card-groups-background);
  border-radius: 5px;
  padding: 1rem 2rem;
  align-items: center;
`;

export const TextDiv = styled.div`
  display: flex;
  height: 100%;
  width: 75%;
  flex-direction: column;
  justify-content: space-around;
  font-family: var(--fml-Barlow-Condensed);
  letter-spacing: 1px;
  color: var(--color-dark);
  gap: 0.3rem;

  h3 {
    font-size: 1.5rem;
  }

  span {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.875rem;
    opacity: 0.8;
  }
`;

export const ButtonDiv = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  button {
    font-family: "Poppins";
    font-size: clamp(0.5rem, 20vw, 0.7rem);
    width: 80px;
    height: 35px;
    min-height: 0;
    font-weight: bold;
  }
`;
