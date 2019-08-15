import React from 'react'
import { graphql } from 'gatsby'
import { ModifiersUtils } from 'react-day-picker'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

import Calendar from 'styles/calendar.css'

const AvailabilityCalendar = ({ reservations }) => {
  const isFirstOfMonth = day => day.getDate() === 1
  const isLastOfMonth = day => day.getDate() === dayjs(day).daysInMonth()
  const isSelected = day => dayjs(day).isAfter(dayjs())
  const isBooked = day =>
    reservations
      .map(({ checkin_date, checkout_date }) =>
        ModifiersUtils.dayMatchesModifier(day, {
          from: new Date(checkin_date),
          to: new Date(checkout_date),
        })
      )
      .every(result => result)
  return (
    <Calendar
      modifiers={{
        selected: isSelected,
        lastOfMonth: isLastOfMonth,
        firstOfMonth: isFirstOfMonth,
        disabled: isBooked,
      }}
      numberOfMonths={2}
      interactionDisabled
    />
  )
}

AvailabilityCalendar.propTypes = {
  reservations: PropTypes.arrayOf(
    PropTypes.shape({
      checkin_date: PropTypes.string.isRequired,
      checkout_date: PropTypes.string.isRequired,
    })
  ),
}

export const query = graphql`
  fragment Calendar on wordpress__wp_listing {
    reservations {
      checkin_date
      checkout_date
    }
  }
`

export default AvailabilityCalendar
