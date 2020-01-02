import styled, { css } from '@xstyled/emotion';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Ripples from 'react-ripples';

import { transition } from 'theme/transitions';

const linkStyle = css`
  color: textPrimary;
  font-weight: bold;
  letter-spacing: labels;
  font-family: serif;
  display: flex;
  flex-direction: row;
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
    &:hover {
      color: secondary;
    }
    ${transition('color')}
    &::before {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      height: 2px;
      background-color: secondary;
      transform: translate(-50%, 0) scaleX(0);
      transform-origin: center;
      content: '';
      ${transition('transform')};
    }
  }
`;

export const StyledLink = styled(Link)`
  ${linkStyle}
`;

export const StyledA = styled.a`
  ${linkStyle}
`;

const HeaderLink = ({ to, ...props }) => (
  <Ripples>
    <StyledLink {...props} to={to} activeClassName="active">
      <span>{to.replace('/', '').replace(/-/g, ' ')}</span>
    </StyledLink>
  </Ripples>
);

HeaderLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default HeaderLink;
