import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { themeGet } from 'styled-system'

import Link from 'components/link'
import transitions from 'theme/transitions'

const StyledLink = styled(Link)`
  margin: auto;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: stretch;
  transition: ${transitions.create('background')};
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    text-decoration: none;
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
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: ${themeGet('colors.text.primary')};
      transform-origin: center;
      transform: translate(-50%, 0) scaleX(0);
      transition: transform 0.3s ease-in-out;
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
