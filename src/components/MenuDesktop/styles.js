import styled from "styled-components";

export const Div = styled.div`
display: flex;
justify-content: flex-end;
`
export const Ul = styled.ul`
display: flex;
`

export const Button = styled.button`
 width: 110px;
 height: 45px;
 display: flex;
 align-items: center;
 justify-content: space-evenly;
 font-size: 23px;
 cursor: pointer;
 border: none;
 outline: none;
 background: transparent;
 color: #fff;
 font-family: var(--fml-Barlow-Condensed);
 font-weight: 700;
 position: relative;
 transition: all 0.5s;
 z-index: 1;


    &::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 width: 5px;
 height: 100%;
 background-color: #fff;
 z-index: -1;
 transition: all 0.5s;
}
&:hover::before {
 width: 100%;
}
&:hover {
    color: var(--color-dark);
}
&:active:before {
 background: var(--color-dark);
}
p{
    &:nth-child(1){
        transform: translateY(3px);
        
    }
}


`