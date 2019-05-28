import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { themeGet } from 'styled-system'

import transitions from 'theme/transitions'
import Link from 'components/link'

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-items: stretch;
  margin: auto;
  padding: 10px;
  text-transform: uppercase;
  text-decoration: none;
  transition: ${transitions.create('background')};
  &:hover {
    text-decoration: none;
    background: rgba(0, 0, 0, 0.1);
  }
  span {
    position: relative;
    font-weight: inherit;
    font-style: inherit;
    &:hover {
      &::before {
        transform: translate(-50%, 0) scaleX(1);
      }
    }
    &::before {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      height: 2px;
      background-color: ${themeGet('colors.text.primary')};
      transform: translate(-50%, 0) scaleX(0);
      transform-origin: center;
      transition: transform 0.3s ease-in-out;
      content: '';
    }
  }
`

const HeaderLink = ({ to }) => (
  <StyledLink
    to={to}
    fade
    duration={0.5}
    color="text.primary"
    fontWeight="bold"
    letterSpacing="labels"
    fontFamily="serif"
  >
    <span>{to.replace('/', '').replace(/-/g, ' ')}</span>
  </StyledLink>
)

HeaderLink.propTypes = {
  to: PropTypes.string.isRequired,
}

export default HeaderLink
