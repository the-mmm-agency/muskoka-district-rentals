import css from '@styled-system/css'

const normalize = css({
  '*': {
    boxSizing: 'border-box',
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  html: {
    boxSizing: 'border-box',
    fontKerning: 'normal',
    fontVariantNumeric: 'lining-nums',
    mozOsxFontSmoothing: 'grayscale',
    scrollBehavior: 'smooth',
    webkitFontSmoothing: 'antialiased',
  },
  body: {
    fontFamily: 'sans',
    backgroundColor: 'background.default',
    m: 0,
  },
  'button, input, optgroup, select, textarea': {
    font: 'inherit',
  },
  '::placeholder': {
    color: 'text.primary',
    opacity: '0.6',
    font: 'inherit',
  },
  a: {
    '-moz-focus-inner': {
      borderstyle: 'none',
    },
    padding: '0',
    verticalAlign: 'middle',
    backgroundColor: 'transparent',
    border: '0',
    borderRadius: '0',
    outline: 'none',
    cursor: 'pointer',
    appearance: 'none',
    userSelect: 'none',
    webkitTapHighlightColor: 'transparent',
  },
  'article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary': {
    display: 'block',
  },
  'b,strong': {
    color: 'text.primary',
    fontWeight: 'bolder',
  },
  'blockquote *:last-of-type, li *:last-of-type, p *:last-of-type': {
    mb: 0,
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
  h1: {
    my: '0.67em',
  },
  img: {
    borderStyle: 'none',
  },
  'input, textarea': {
    '&:focus': {
      outline: 'none',
    },
    color: 'primary',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.18)',
    outline: 'none',
    appearance: 'none',
    resize: 'none',
  },
  li: {
    mb: 2,
  },
  'li > ol, li > ul': {
    mb: 2,
    ml: 3,
    mt: 2,
  },
  'ol, ul': {
    ml: 3,
  },
  'ol,li,ul': {
    pl: 0,
  },
  small: {
    fontSize: '80%',
  },
  'svg:not(:root)': {
    overflow: 'hidden',
  },
  th: {
    textAlign: 'left',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    fontFeatureSettings: 'tnum',
    px: 3,
    py: 2,
  },
  'th,td': {
    ':first-of-type': {
      pl: 0,
    },
    ':last-of-type': {
      pr: 0,
    },
  },
  thead: {
    textAlign: 'left',
  },
  'h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,p,figure,pre,table,fieldset,blockquote,form,noscript,iframe,address': {
    m: 0,
    mb: '1.8rem',
  },
})

export default normalize
