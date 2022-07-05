import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  text-align: center;

  h3 {
    font-size: 2rem;
    color: var(--color-dark);
  }

  .paginationBttns {
    user-select: none;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0px;
    font-family: var(--fml-Poppins);

    li {
      margin: 2px;
      a {
        cursor: pointer;
        font-size: 14px;
        border-radius: 5px;
        padding: 8px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
          rgba(0, 0, 0, 0.23) 0px 6px 6px;
        &:hover {
          background: var(--color-purple);
        }
      }
    }
    .paginationAticve {
      background: var(--color-purple);
      height: 100%;
      padding: 8px 0;
      border-radius: 5px;
      color: #fff;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;

      /* transform: scale(1.5); */
    }
    .previousBttn {
    }
  }
`;
export const DivCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
  justify-content: center;
  justify-items: center;
  max-width: 1220px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
