import React from 'react'
import styled from 'styled-components'

import Link from 'components/link'
import { options as typography, rhythm, scale } from 'theme/typography'

const Wrapper = styled.div`
  margin: ${rhythm(1 / 2)} ${rhythm(1 / 4)};
  text-align: center;
  text-transform: uppercase;
  h1 {
    ${scale(3 / 4)}
    margin-bottom: 0;
  }
  h2 {
    ${scale(1 / 6)};
    font-family: ${typography.bodyFontFamily.join(',')};
  }
`

const Logo = () => (
  <Link to="/">
    <Wrapper>
      <h1>muskoka</h1>
      <h2>district rentals</h2>
    </Wrapper>
  </Link>
)

export default Logo
