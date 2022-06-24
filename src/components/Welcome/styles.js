import styled from "styled-components";

export const Container = styled.section`
background: var(--bg-gradient);
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`

export const Box1 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
img{
    width:100%;
    max-width: 600px;
}

@media (max-width: 680px){
    img{
    width:100%;
    max-width: 300px;
}


}


`
export const Div = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

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
export const Box2 = styled.div`
    width: 50%;
    display:  flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media (max-width: 680px){
    height: 150px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;


}
    
`
