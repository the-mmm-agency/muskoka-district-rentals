import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Bed } from 'styled-icons/boxicons-regular/Bed'

const Beds = ({ beds }) => (
  <table>
    <thead>
      <tr>
        <th>Room Type</th>
        <th>Bed Type</th>
        <th>Mattress Type</th>
        <th>Mattress Size</th>
      </tr>
    </thead>
    <tbody>
      {beds.map(({ room_type, bed_type, mattress_type, mattress_size }) => (
        <tr key={room_type}>
          <td>
            <Bed />
            {room_type}
          </td>
          <td>{bed_type}</td>
          <td>{mattress_type}</td>
          <td>{mattress_size}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

Beds.propTypes = {
  beds: PropTypes.arrayOf(
    PropTypes.shape({
      room_type: PropTypes.string.isRequired,
      bed_type: PropTypes.string.isRequired,
      mattress_type: PropTypes.string.isRequired,
      mattress_size: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export const query = graphql`
  fragment Beds on wordpress__wp_mphb_room_type {
    acf {
      beds {
        room_type
        bed_type
        mattress_size
        mattress_type
      }
    }
  }
`

export default Beds
