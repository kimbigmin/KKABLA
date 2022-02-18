import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
      font-family: 'Pretendard-regular';
      font-weight: 500;
      font-style: normal;
      src: url('./Pretendard-Medium.woff2') format('woff2'),url('./Pretendard-Medium.woff') format('woff'),url('./Pretendard-Medium.ttf') format('woff');
      
    }

    @font-face {
      font-family: 'Pretendard-regular';
      font-weight: 700;
      font-style: normal;
      src: url('./Pretendard-SemiBold.woff2') format('woff2'),url('./Pretendard-SemiBold.woff') format('woff'),url('./Pretendard-SemiBold.ttf') format('woff');

    }

`;
