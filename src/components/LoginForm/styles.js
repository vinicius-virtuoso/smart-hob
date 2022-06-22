import styled from "styled-components"

export const Container = styled.div`
  
  display: flex;
  justify-content: center;
  width: 25%;
  height: 100%;
  background-color: var(--color-purple);

`

export const FormContainer = styled.form`
  
  display: flex;
  flex-direction: column;

  h3 {
    font-size: clamp(1.5rem, 8vw, 2.5rem);
  }

`