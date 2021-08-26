import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #fff;
    overflow-x: hidden;
    font-family: 'SpoqaHanSansNeo', 'Apple SD Gothic Neo', sans-serif;
  }
  @font-face{
    font-family: 'SpoqaHanSansNeo';
    src: url('/font/SpoqaHanSansNeo-Thin.woff') format('woff');
    font-weight: 100;
  }
  @font-face{
    font-family: 'SpoqaHanSansNeo';
    src: url('/font/SpoqaHanSansNeo-Light_1.woff') format('woff');
    font-weight: 300;
  }
  @font-face{
    font-family: 'SpoqaHanSansNeo';
    src: url('/font/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: 400;
  }
  @font-face{
    font-family: 'SpoqaHanSansNeo';
    src: url('/font/SpoqaHanSansNeo-Medium.woff') format('woff');
    font-weight: 500;
  }
  @font-face{
    font-family: 'SpoqaHanSansNeo';
    src: url('/font/SpoqaHanSansNeo-Bold.woff') format('woff');
    font-weight: 700;
  }
`;

export const responsiveSize = {
  sm: '(max-width: 320px)',
  md: '(max-width: 768px)',
  lg: '(max-width: 1440px)',
  xl: '1900px',
};
