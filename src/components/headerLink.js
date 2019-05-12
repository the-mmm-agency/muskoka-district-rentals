import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from 'components/link'
import transitions from 'theme/transitions'
import palette from 'theme/palette'
import { options as typography } from 'theme/typography'

const StyledLink = styled(Link)`
  color: ${palette.text.primary};
  font-family: ${typography.headerFontFamily.join(',')};
  font-weight: bold;
  font-style: bold;
  margin: auto;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: stretch;
  transition: ${transitions.create('background')};
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  span {
    position: relative;
    &:hover {
      &::before {
        transform: translate(-50%, 0) scaleX(1);
      }
    }
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: ${palette.text.primary};
      transform-origin: center;
      transform: translate(-50%, 0) scaleX(0);
      transition: transform 0.3s ease-in-out;
    }
  }
`
const HeaderLink = ({ to }) => (
  <StyledLink to={to} fade duration={0.5}>
    <span>{to.replace('/', '').replace(/-/g, ' ')}</span>
  </StyledLink>
)

HeaderLink.propTypes = {
  to: PropTypes.string.isRequired,
}

export default HeaderLink
