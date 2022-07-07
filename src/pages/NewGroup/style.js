import styled from "styled-components";

export const HeaderForm = styled.div`
  @media (max-width: 400px) {
    padding: 30px;
    background-color: var(--color-yellow);
  }
  background-color: var(--color-yellow);
  padding: 20px;

  a {
    color: var(--color-dark);
  }
`;

export const ImageHeader = styled.div`
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
<<<<<<< HEAD
    padding: 30px;
    justify-content: center;
=======
    width: 100%;

>>>>>>> 6ad1c183247573dd147f3d2445ca6de8f92c9574
    img {
      display: none;
    }

    h3 {
      font-size: 12px;
    }

    button {
      width: 2rem;
      border: 2px solid var(--color-dark);
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
<<<<<<< HEAD
  justify-content: center;

  img {
    max-width: 1000px;
    width: 400px;
    height: 40vh;
=======
  width: 100%;

  img {
    width: 60%;
    height: 10rem;
>>>>>>> 6ad1c183247573dd147f3d2445ca6de8f92c9574
  }

  h3 {
    font-size: clamp(1.5rem, 5vw, 2rem);
    color: var(--color-dark);
  }
`;
