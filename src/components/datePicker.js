import React from 'react'
import styled from 'styled-components'
import DayPicker from 'react-day-picker'

import 'react-day-picker/lib/style.css'

import palette from 'theme/palette'
import shadows from 'theme/shadows'

const StyledDayPicker = styled(DayPicker)`
  box-shadow: ${shadows[3]};
  background-color: white;
  position: absolute;
  z-index: 9000;
  .DayPicker-day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: ${palette.primary} !important;
    color: white;
  }
  .DayPicker-Day {
    border-radius: 0 !important;
  }
  .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
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

export default DatePicker
