import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@xstyled/emotion'

const CottageInfo = ({ attributes }) => (
  <ul
    css={css`
      li {
        margin-bottom: 1;
        color: 'textLight';
      }
      width: 100%;
      margin-top: 4;
      margin-left: 0;
      font-weight: bold;
      list-style: none;
    `}
  >
    {attributes.map(attribute => (
      <li key={attribute.name}>
        <span color="textPrimary" fontWeight="bold">
          {attribute.name}:&nbsp;
        </span>
        <span>{attribute.value}</span>
      </li>
    ))}
  </ul>
)

CottageInfo.propTypes = {
  attributes: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
}

export default CottageInfo
