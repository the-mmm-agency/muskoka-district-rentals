import { css } from '@xstyled/emotion'

import { breakpoints } from 'theme/media'

const styles = css`
  html {
    box-sizing: border-box;
    line-height: default;
    ${breakpoints({
      xs: {
        fontSize: 10,
      },
      sm: {
        fontSize: 12,
      },
      md: {
        fontSize: 14,
      },
    })}
  }
  body {
    color: textSecondary;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: textPrimary;
    font-weight: bold;
    font-family: serif;
    line-height: 1.2;
    margin-top: 0;
  }
  h1 {
    font-size: 0;
  }
  h2 {
    font-size: 1;
  }
  h3 {
    font-size: 2;
  }
  h4 {
    font-size: 3;
  }
  h5 {
    font-size: 4;
  }
  h6 {
    font-size: 5;
  }
  p,
  blockquote {
    color: textParagraph;
    font-weight: 500;
  }
  ::selection {
    color: white;
    background-color: primary;
  }
  a {
    &:hover {
      text-decoration: underline;
    }
    color: secondary;
    text-decoration: none;
  }
  blockquote {
    margin-top: 2;
    margin-left: 0;
    padding-left: 2;
    color: textPrimary;
    background-color: backgroundDefault;
    border-color: secondary;
    border-left: 0.25em solid;
  }
  thead {
    background: rgba(0, 0, 0, 0.03);
    font-weight: bold;
  }
  th {
    font-weight: bold;
  }
  thead,
  tr {
    color: textPrimary;
    padding: 2 3;
  }
  th,
  td {
    color: textPrimary;
    font-size: 0.8rem;
  }
  td {
    padding: 3;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: 500;
  }
  table {
    text-transform: uppercase;
    border-collapse: collapse;
  }
`

export default styles
