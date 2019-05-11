import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

const Link = styled(GatsbyLink)`
  appearance: none;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  outline: none;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  -moz-focus-inner: {
    borderstyle: none;
  }
`

export default Link
