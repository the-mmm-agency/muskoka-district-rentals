import css from '@styled-system/css'

import transitions from 'theme/transitions'

const headers = Object.assign(
  {},
  ...['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((tag, index) => ({
    [tag]: {
      fontSize: index,
      lineHeight: 'header',
      fontFamily: 'serif',
      fontWeight: 'bold',
    },
  }))
)

const styles = css({
  '*': {
    boxSizing: 'border-box',
  },
  html: {
    fontSize: ['10px', '12px', '14px', 'base'],
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
  },
  '::selection': {
    color: 'white',
    backgroundColor: 'primary',
  },
  button: {
    '&::-moz-focus-inner': {
      borderStyle: 'none',
    },
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      textDecoration: 'none',
    },
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0',
    padding: '0',
    fontWeight: '500',
    textDecoration: 'none',
    verticalAlign: 'middle',
    outline: 'none',
    cursor: 'pointer',
    appearance: 'none',
  },
  a: {
    '&:hover': {
      textDecoration: 'underline',
    },
    padding: '0',
    color: 'secondary',
    textDecoration: 'none',
    verticalAlign: 'middle',
    border: '0',
    borderRadius: '0',
    outline: 'none',
    cursor: 'pointer',
    transition: transitions.create(['color', 'text-decoration']),
    appearance: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    '-moz-focus-inner': {
      borderstyle: 'none',
    },
  },
  'ol, ul': {
    listStyle: 'none',
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  body: {
    margin: '0',
    fontFeatureSettings: 'lnum 1, kern 1',
    fontFamily: 'sans',
    fontKerning: 'normal',
    fontVariantNumeric: 'lining-nums',
    backgroundColor: 'background.default',
  },
  'input, textarea': {
    color: 'primary',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    appearance: 'none',
    resize: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.18)',
    '&:focus': {
      outline: 'none',
    },
  },
  p: {
    color: 'text.paragraph',
  },
  blockquote: {
    backgroundColor: 'background.default',
    borderLeft: '.25em solid',
    borderColor: 'secondary',
    color: 'text.primary',
    mt: '2',
    pl: '2',
    ml: '0',
  },
  '&::placeholder': {
    color: 'text.primary',
    opacity: '0.6',
  },
  thead: {
    backgroundColor: 'background.dark',
  },
  'thead,tr': {
    color: 'text.primary',
  },
  'th,td': {
    '&:first-of-type': {
      pl: 2,
    },
  },
  ...headers,
})

export default styles
