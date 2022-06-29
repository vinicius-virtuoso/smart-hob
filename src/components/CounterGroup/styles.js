import styled from "styled-components";

export const Div = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;

`
export const Ul = styled.ul`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
`

export const Li = styled.li`
display: flex;
align-items: center;
justify-content: center;
width: 100%;

p{
    color: #fff;
    font-family: var(--fml-Barlow-Condensed);
    font-size: clamp(1em, 50vw, 1.6em);

    &:nth-child(1){
        margin-right: 10px;
        font-weight: bold;
        text-decoration: underline;
        text-decoration-style: dashed;
        text-underline-offset: 0.4rem;
        
    }
}

`