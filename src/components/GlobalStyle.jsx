// 리셋파일이라고 생각하면 됨!
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Ycomputer-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/Ycomputer-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    body{
        font-family: 'Ycomputer-Regular', 'arial', sans-serif;
        padding-top:  1em;
        white-space: pre-wrap;
    }
    ul, ol{
        list-style: none;
        padding-left: 0px;
        }
`;

export default GlobalStyle;
