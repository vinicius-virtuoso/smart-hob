import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        
        
        --color-dark:#06283D;
        --color-purple-light: #8798DC;
        --color-white: #FFFFFF;
        --color-purple: #4944A8;
        --color-white: #FFFFFF;
        --color-yellow: #F9CE69;
        --color-light: #E8E8E8;
        --color-gray: #7B7171;
        --color-gray-50: #CACACA;
        --color-negative: #E42B2B;
        --color-lightblue: #E8E8E8;
        --color-pink-light:#fdecc6;
        --color-card-groups-background: #D0CDE1;
        --bg-gradient: linear-gradient(81.53deg, #4944A8 0%, #8798DC 37.8%, #ACCAFB 93.14%);
        --bg-gradient-login: linear-gradient(75.06deg, #ACCAFB 0%, #BDCBDB 24.17%, #F9CE69 96.7%);
        --bor-grey: rgba(123, 113, 113, 1);

        --fml-Fascinate: 'Fascinate', cursive;
        --fml-Barlow-Condensed:'Barlow Condensed', sans-serif;
        --fml-Poppins:'Poppins', sans-serif;
        --fml-Titillium-Web:'Titillium Web', sans-serif;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul,ol,li,a{
        list-style: none;
        text-decoration: none;
    }
    body{
        font-family: var(--fml-Barlow-Condensed);
        background:var(--color-purple);
        min-height:100vh;
    }
   
`;
