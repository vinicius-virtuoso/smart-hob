import styled from "styled-components";

export const Div= styled.div`
position: relative;
z-index: 10;


button{
    background:#fff;
    height: 40px;
    border-radius: 7px;
    border:none;
    position: absolute;
    top: -20px;
    cursor: pointer;
    right: 10px;
    
    p{
        font-size: 40px;
        color: var(--color-dark);
    }

}
;
`