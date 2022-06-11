import { createGlobalStyle } from 'styled-components';
import { COLORS } from './constatnts/colors';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    body {
        color: inherit;
        background: ${COLORS.xiketic};
    }
    ::-webkit-scrollbar-thumb {
        background: ${COLORS['grey-200']};
        border-radius: 5px;
    }
    ::-webkit-scrollbar {
       display: none;
    }
    ::-webkit-scrollbar-track {
        background: ${COLORS['grey-600']};
    }
`;

export default GlobalStyle;
