import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

html {
  font-size: 62.5%;
}

body {
  background: #f9f9f9;
  color: #212529;
  -webkit-font-smoothing: antialiased;
  font-family: 'Noto Sans SC', sans-serif;
  padding-top: 50px;
}

* {
  box-sizing: border-box;
}
`;
