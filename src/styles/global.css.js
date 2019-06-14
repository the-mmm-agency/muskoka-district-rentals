import css from '@styled-system/css'

import transitions from 'theme/transitions'

const headers = Object.assign(
  {},
  ...['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((tag, index) => ({
    [tag]: {
      color: 'text.primary',
      fontSize: index,
      lineHeight: 'header',
      fontFamily: 'serif',
      fontWeight: 'bold',
    },
  }))
)

const styles = css({
  html: {
    fontSize: ['10px', '10px', '12px', 'base'],
    boxSizing: 'border-box',
    lineHeight: 'default',
  },
  body: {
    color: 'text.secondary',
  },
  'p,blockquote': {
    color: 'text.paragraph',
    fontWeight: 500,
  },
  '::selection': {
    color: 'white',
    backgroundColor: 'primary',
  },
  a: {
    ':hover': {
      textDecoration: 'underline',
    },
    color: 'secondary',
    textDecoration: 'none',
    transition: transitions.create(['color', 'text-decoration']),
  },
  blockquote: {
    backgroundColor: 'background.default',
    borderLeft: '.25em solid',
    borderColor: 'secondary',
    color: 'text.primary',
    mt: 2,
    pl: 2,
    ml: 0,
  },
  thead: {
    backgroundColor: 'background.dark',
  },
  'thead,tr': {
    color: 'text.primary',
  },
  ...headers,
})

export default styles
