import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  height: 75px;
  background-color: var(--color-card-groups-background);
  border-radius: 5px;
  padding: 10px 20px 10px 40px;



`

export const TextDiv = styled.div`

  display: flex;
  height: 100%;
  width: 75%;
  flex-direction: column;
  justify-content: space-around;

  h3 {
    font-family: 'Barlow';
    font-size: clamp(0.5rem, 20vw, 0.9rem);
  }

  span {
    font-family: 'Barlow';
    font-size: clamp(0.5rem, 20vw, 0.7rem);
  }

  p {
    font-family: 'Barlow';
    font-size: clamp(0.5rem, 20vw, 0.5rem);
  }


`

export const ButtomDiv = styled.div`

  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  button {
    font-family: 'Poppins';
    font-size: clamp(0.5rem, 20vw, 0.7rem);
    width: 80px;
    height: 35px;
    min-height: 0;
    font-weight: bold;
  }


`

