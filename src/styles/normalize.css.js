import { css } from '@xstyled/emotion';

const normalize = css`
  * {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-kerning: normal;
    font-variant-numeric: lining-nums;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: sans;
    background-color: backgroundDefault;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  dl,
  dd,
  p,
  figure,
  pre,
  table,
  fieldset,
  blockquote,
  form,
  noscript,
  iframe,
  address {
    margin-top: 0;
    margin-bottom: 1.8rem;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
  }
  &::placeholder {
    color: textPrimary;
    font: inherit;
    opacity: 0.6;
  }
  a {
    padding: none;
    vertical-align: baseline;
    background-color: transparent;
    border: none;
    border-radius: none;
    outline: none;
    cursor: pointer;
    appearance: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  b,
  strong {
    color: textPrimary;
    font-weight: bolder;
  }
  blockquote *:last-of-type,
  li *:last-of-type,
  p *:last-of-type {
    margin-bottom: 0;
  }
  button {
    &::-moz-focus-inner {
      border-style: none;
    }
    &:hover {
      text-decoration: none;
    }
    svg {
      vertical-align: baseline;
    }
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: none;
    overflow: hidden;
    font-weight: 500;
    text-decoration: none;
    vertical-align: middle;
    border: none;
    outline: none;
    cursor: pointer;
    appearance: none;
  }
  img {
    border-style: none;
  }
  input,
  textarea {
    &:focus {
      outline: none;
    }
    color: primary;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(black, 0.18);
    outline: none;
    appearance: none;
    resize: none;
  }
  li {
    margin-bottom: 2;
  }
  ol,
  ul {
    margin-left: 3;
  }
  ol,
  li,
  ul {
    padding-left: 0;
  }
  li > ol,
  li > ul {
    margin-top: 2;
    margin-bottom: 2;
    margin-left: 3;
  }
  small {
    font-size: 80%;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  th {
    padding: 2 3;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    font-feature-settings: 'tnum';
  }
  thead,
  tr {
    text-align: left;
  }
`;
export default normalize;
