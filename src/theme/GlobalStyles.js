import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        src: url("fonts/montserrat-regular-webfont.eot");
        src: url("fonts/montserrat-regular-webfont.eot?#iefix") format("embedded-opentype"), url("fonts/montserrat-regular-webfont.woff2") format("woff2"), url("fonts/montserrat-regular-webfont.woff") format("woff"), url("fonts/montserrat-regular-webfont.ttf") format("truetype");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
    }

    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        src: url("fonts/montserrat-bold-webfont.eot");
        src: url("fonts/mmontserrat-bold-webfont.eot?#iefix") format("embedded-opentype"), url("fonts/mmontserrat-bold-webfont.woff2") format("woff2"), url("fonts/mmontserrat-bold-webfont.woff") format("woff"), url("fonts/mmontserrat-bold-webfont.ttf") format("truetype");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        font-family: ${({ theme }) => theme.fonts.body};
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.background};
    }
`;
