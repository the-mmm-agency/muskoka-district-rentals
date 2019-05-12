import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import DayPicker from 'react-day-picker'

import 'react-day-picker/lib/style.css'

import palette from 'theme/palette'
import { rhythm } from 'theme/typography'
import shadows from 'theme/shadows'

const StyledDayPicker = styled(DayPicker)`
  box-shadow: ${shadows[1]};
  background-color: white;
  border: 1px solid #eee;
  width: 100%;
  border-radius: 6px;
  position: absolute;
  padding-bottom: ${rhythm(1 / 2)};
  z-index: 9000;
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: ${palette.alt};
    border-radius: 0px;
    color: white;
  }
  .DayPicker-Months {
    justify-content: space-evenly;
    flex-wrap: nowrap;
  }
  .DayPicker-Day {
    color: ${palette.text.primary};
    font-weight: 500;
    font-size: 0.9rem;
    padding: 0.5rem 0.9rem;
  }
  .DayPicker-Weekday {
    color: ${palette.text.secondary};
    font-weight: bold;
    font-style: bold;
    text-transform: uppercase;
  }
  .DayPicker-Caption {
    text-align: center;
    font-weight: 500;
    color: ${palette.text.primary};
  }
  .DayPicker-Day--start {
    border-top-left-radius: 6px !important;
    border-bottom-left-radius: 6px !important;
    background-color: ${palette.primary} !important;
  }
  .DayPicker-Day--end {
    border-top-right-radius: 6px !important;
    border-bottom-right-radius: 6px !important;
    background-color: ${palette.primary} !important;
  }
`

const DatePicker = ({ open, from, to, handleDayClick }) => {
  const modifiers = { start: from, end: to }
  if (!open) {
    return null
  }
  return (
    <StyledDayPicker
      numberOfMonths={2}
      selectedDays={[from, { from, to }]}
      modifiers={modifiers}
      onDayClick={handleDayClick}
    />
  )
}

DatePicker.propTypes = {
  from: PropTypes.string.isRequired,
  handleDayClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
}

export default DatePicker
