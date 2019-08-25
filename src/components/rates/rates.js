import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

const Rates = ({ price, pricePerWeek, pricePerMonth }) => (
  <table>
    <thead>
      <tr>
        <th>daily</th>
        <th>weekly</th>
        <th>monthly</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{price}</td>
        <td>{pricePerWeek}</td>
        <td>{pricePerMonth}</td>
      </tr>
    </tbody>
  </table>
)

Rates.propTypes = {
  price: PropTypes.string.isRequired,
  pricePerMonth: PropTypes.string.isRequired,
  pricePerWeek: PropTypes.string.isRequired,
}

export const query = graphql`
  fragment Rates on wordpress__wp_property {
    pricePerWeek
    pricePerMonth
    price
  }
`

export default Rates
