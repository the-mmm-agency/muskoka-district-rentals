import styled from '@xstyled/emotion'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

const Calendar = styled(DayPicker)`
  margin: 2;
  padding: 4;
  background-color: white;
  width: 100%;
  border: 1px solid #e4e5ec;
  border-radius: 5px;
  box-shadow: 1;
  .DayPicker-NavButton--next,
  .DayPicker-NavButton--prev {
    width: 2em;
    outline: none;
    height: 2em;
    margin-top: -1em;
    background-size: cover;
    opacity: 0.2;
  }
  .DayPicker-Month {
    margin: 0 2em;
    border-collapse: separate;
    border-spacing: 0 0.7em;
    outline: none;
  }
  .DayPicker-Caption {
    color: textPrimary;
    font-weight: 600 !important;
    text-align: center;
  }
  .DayPicker-Day--disabled {
    color: textDisabled;
  }
  .DayPicker-Day:not(.DayPicker-Day--disabled) {
    color: textParagraph;
  }
  .DayPicker-Day {
    padding: 0.5rem 1rem;
    font-weight: 600;
    outline: none;
  }
  .DayPicker-NavButton--next {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcuOTIsMTEuNjJhMSwxLDAsMCwwLS4yMS0uMzNsLTUtNWExLDEsMCwwLDAtMS40MiwxLjQyTDE0LjU5LDExSDdhMSwxLDAsMCwwLDAsMmg3LjU5bC0zLjMsMy4yOWExLDEsMCwwLDAsMCwxLjQyLDEsMSwwLDAsMCwxLjQyLDBsNS01YTEsMSwwLDAsMCwuMjEtLjMzQTEsMSwwLDAsMCwxNy45MiwxMS42MloiLz48L3N2Zz4=);
  }
  .DayPicker-NavButton--prev {
    left: 1em;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcsMTFIOS40MWwzLjMtMy4yOWExLDEsMCwxLDAtMS40Mi0xLjQybC01LDVhMSwxLDAsMCwwLS4yMS4zMywxLDEsMCwwLDAsMCwuNzYsMSwxLDAsMCwwLC4yMS4zM2w1LDVhMSwxLDAsMCwwLDEuNDIsMCwxLDEsMCwwLDAsMC0xLjQyTDkuNDEsMTNIMTdhMSwxLDAsMCwwLDAtMloiLz48L3N2Zz4=);
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled) {
    color: white !important;
  }
  .DayPicker-Day--start,
  .DayPicker-Day--selected:first-of-type,
  .DayPicker-Day--selected.DayPicker-Day--firstOfMonth {
    border-top-left-radius: 10% !important;
    border-bottom-left-radius: 10% !important;
  }

  .DayPicker-Day--end,
  .DayPicker-Day--selected:last-of-type,
  .DayPicker-Day--selected.DayPicker-Day--lastOfMonth {
    border-top-right-radius: 10% !important;
    border-bottom-right-radius: 10% !important;
  }
  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: primary;
    opacity: 0.1;
  }
  .DayPicker:not(.DayPicker--interactionDisabled).DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--start):not(.DayPicker-Day--end):hover {
    background-color: primary;
    filter: darken(0.2);
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: alt;
    border-radius: 0px;
  }
  .DayPicker-Months {
    justify-content: space-evenly;
  }
  .DayPicker-Weekday {
    color: textSecondary;
    font-weight: bold;
    font-style: bold;
    text-transform: uppercase;
  }
  .DayPicker-Day--start,
  .DayPicker-Day--end {
    &:not(.DayPicker-Day--outside) {
      background-color: primary !important;
      border-radius: 0;
    }
  }
  .DayPicker-wrapper {
    padding-bottom: 0;
    outline: none;
  }
`

export default Calendar
