import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

const Services = ({ services }) => (
  <table>
    <thead>
      <tr>
        <th>Fee</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      {services.map(({ title, mphb_price: price }) => (
        <tr key={price}>
          <td>{title}</td>
          <td>${price}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      mphb_price: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}

export const query = graphql`
  fragment Services on wordpress__wp_mphb_room_type {
    services {
      title
      mphb_price
    }
  }
`

export default Services
