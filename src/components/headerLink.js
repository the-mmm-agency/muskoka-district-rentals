import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from 'components/link'
import { options as typography } from 'theme/typography'

const StyledLink = styled(Link)`
  color: inherit;
  font-family: ${typography.headerFontFamily.join(',')};
  font-weight: bold;
  font-style: bold;
  margin: auto;
  text-transform: uppercase;
  padding: 10px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: stretch;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`
const HeaderLink = ({ to }) => (
  <StyledLink to={to}>
    <span>{to.replace('/', '').replace(/-/g, ' ')}</span>
  </StyledLink>
)

HeaderLink.propTypes = {
  to: PropTypes.string.isRequired,
}

export default HeaderLink
