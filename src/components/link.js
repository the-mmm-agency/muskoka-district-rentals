import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Link = styled(AniLink)`
  padding: 0;
  text-decoration: none;
  vertical-align: middle;
  border: 0;
  border-radius: 0;
  outline: none;
  cursor: pointer;
  appearance: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -moz-focus-inner: {
    borderstyle: none;
  }
`

export default Link
