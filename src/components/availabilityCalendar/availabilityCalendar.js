import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

import Calendar from 'styles/calendar.css'

const AvailabilityCalendar = ({ bookedDates }) => {
  const isFirstOfMonth = day => day.getDate() === 1
  const isLastOfMonth = day => day.getDate() === dayjs(day).daysInMonth()
  const isSelected = day => dayjs(day).isAfter(dayjs())
  const isBooked = day =>
    bookedDates
      .map(date => day.getDate() !== new Date(date))
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
  bookedDates: PropTypes.arrayOf(PropTypes.number.isRequired),
}

export const query = graphql`
  fragment Calendar on wordpress__wp_property {
    bookedDates
  }
`

export default AvailabilityCalendar
