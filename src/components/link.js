import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

const Link = styled(GatsbyLink)`
  -moz-focus-inner: {
    borderstyle: none;
  }
  appearance: none;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  outline: none;
  padding: 0;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
`

export default Link
