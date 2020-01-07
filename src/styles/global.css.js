import { css } from '@xstyled/emotion';

import { up, down } from 'theme/media';
import scrollbars from 'styles/scrollbars.css';

const styles = css`
  *,
  *::before,
  *::after {
    @media screen and (prefers-reduced-motion: reduce) {
      transition: none !important;
    }
  }
  .cwuCQv {
    width: 40px;
  }
  .rsc-header-title {
    color: white;
  }
  .rsc-content * {
    transition: none;
    transform: none !important;
  }
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
    scroll-behavior: smooth;
    ${scrollbars}
  }
  body {
    color: textSecondary;
  }
  button {
    white-space: nowrap;
    svg {
      width: 1.3em;
      height: 1.3em;
      margin-right: 0.5em;
      margin-bottom: 0.3em;
      margin-left: 0.5em;
      fill: currentColor;
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
  iframe {
    ${up('md')} {
      width: 60%;
    }
  }
  a {
    &:hover {
      text-decoration: underline;
    }
    color: secondary;
    text-decoration: none;
  }
  hr {
    display: block;
    width: 100%;
    margin-top: 1;
    margin-right: auto;
    margin-bottom: 1;
    margin-left: auto;
    border-color: backgroundDefault;
    border-style: inset;
    border-width: 0.5px;
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
      margin-right: 1em;
      margin-bottom: calc(-1 * 0.3em);
      margin-left: 1em;
    }
  }
  table {
    text-transform: uppercase;
    border-collapse: collapse;
  }
  .mdc-menu-surface {
    z-index: modal;
  }
  .ReactModal__Content--after-open {
    width: fit-content;
    height: fit-content;
    margin: auto;
    padding: 0 !important;
    outline: none;
  }
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }
  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
  .ReactModal__Overlay--after-open {
    z-index: modal;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5) !important;
    opacity: 1;
  }
`;

export default styles;
