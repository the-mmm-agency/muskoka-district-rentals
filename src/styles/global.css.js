import { css } from '@xstyled/emotion'

import { down } from 'theme/media'

const styles = css`
  html {
    box-sizing: border-box;
    font-size: 14px;
    ${down('sm')} {
      font-size: 10px;
    }
    ${down('md')} {
      font-size: 12px;
    }
    line-height: default;
  }
  body {
    color: textSecondary;
  }
  button {
    svg {
      margin-left: 0.5em;
      margin-right: 0.5em;
      margin-bottom: 0.3em;
      fill: currentColor;
      height: 1.3em;
      width: 1.3em;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    color: textPrimary;
    font-weight: bold;
    font-family: serif;
    line-height: 1.2;
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
    font-weight: bold;
    background: rgba(0, 0, 0, 0.03);
  }
  th {
    font-weight: bold;
  }
  thead,
  tr {
    padding: 2 3;
    color: textPrimary;
  }
  th,
  td {
    color: textPrimary;
    font-size: 0.8rem;
  }
  td {
    padding: 3;
    font-weight: 500;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    svg {
      width: 1.3em;
      height: 1.3em;
      margin-left: 1em;
      margin-right: 1em;
      margin-bottom: calc(-1 * 0.3em);
    }
  }
  table {
    text-transform: uppercase;
    border-collapse: collapse;
  }
`

export default styles
