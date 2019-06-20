import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { transition } from 'theme/transitions'
import Link from 'components/link'

const StyledLink = styled(Link)`
  color: textPrimary;
  font-weight: bold;
  letter-spacing: labels;
  font-family: serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-items: stretch;
  margin: auto;
  padding: 10px;
  text-transform: uppercase;
  text-decoration: none;
  &:hover,
  &.active {
    span {
      &::before {
        transform: translate(-50%, 0) scaleX(1);
      }
    }
  }
  ${transition('background')};
  &:hover {
    text-decoration: none;
    background: rgba(0, 0, 0, 0.1);
  }
  span {
    position: relative;
    font-weight: inherit;
    font-style: inherit;
    &::before {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      height: 2px;
      background-color: textPrimary;
      transform: translate(-50%, 0) scaleX(0);
      transform-origin: center;
      content: '';
      ${transition('transform')};
    }
  }
`

const HeaderLink = ({ to, ...props }) => (
  <StyledLink {...props} to={to} activeClassName="active" fade duration={0.5}>
    <span>{to.replace('/', '').replace(/-/g, ' ')}</span>
  </StyledLink>
)

HeaderLink.propTypes = {
  to: PropTypes.string.isRequired,
}

export default HeaderLink
