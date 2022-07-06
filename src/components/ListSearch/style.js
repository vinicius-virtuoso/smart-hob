import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  padding-bottom: 3rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
`;
export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem;
  border: 0;
  max-width: 150px;
  width: 100%;
  background: transparent;
  font-family: var(--fml-Poppins);
  border-radius: 5px;
  cursor: pointer;

  ${(props) =>
    props.active && "background:var(--color-purple);color:var(--color-white);"};
`;
