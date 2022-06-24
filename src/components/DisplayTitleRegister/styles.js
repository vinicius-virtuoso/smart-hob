import styled from "styled-components";

export const Main = styled.main`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background: var(--bg-gradient);

`
export const Header = styled.header`
height: 150px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 15px;
`
export const H1 = styled.h1`
font-size: clamp(1.5rem, 8vw, 2.8rem);
font-family: var(--fml-Fascinate);
color: var(--color-dark);
margin-bottom: 5px;
`

export const P = styled.p`
color: var(--color-dark);
font-family: var(--fml-Poppins);
font-size: clamp(0.5rem, 20vw, 1.1rem);
text-align: center;

`
export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
    width: clamp(80%, 50vw, 100%);
}
`
