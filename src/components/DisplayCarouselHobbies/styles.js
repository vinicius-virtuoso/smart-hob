import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

export const Carousel = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-behavior: smooth;

    width: 70vw;

    &::-webkit-scrollbar{
        display: none;
    }
`

export const ContainerBtn = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 5px;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: inherit;
        font-weight: 500;
        font-size: 17px;
        padding: 0.8em 1.3em 0.8em 0.9em;
        color: $color-red-40;
        background: none;
        border: none;
        letter-spacing: 0.05em;
        border-radius: 10px;
        width: 95%;
        
        p{
            cursor: pointer;
            font-size: 35px;
            color: var(--color-dark);

            &:active{
                color: var(--color-purple-light);
            }
        }
    }

`