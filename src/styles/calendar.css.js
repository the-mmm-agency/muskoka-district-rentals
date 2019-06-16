import styled from '@emotion/styled'
import { darken, transparentize } from 'polished'
import DayPicker from 'react-day-picker'
import themeGet from '@styled-system/theme-get'
import 'react-day-picker/lib/style.css'

const Calendar = styled(DayPicker)`
  margin: ${themeGet('space.2')};
  padding: ${themeGet('space.4')};
  background-color: white;
  width: 100%;
  border: 1px solid #e4e5ec;
  border-radius: 5px;
  box-shadow: ${themeGet('shadows.1')};
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
    color: ${themeGet('colors.text.primary')};
    font-weight: 600 !important;
    text-align: center;
  }
  .DayPicker-Day {
    padding: 0.5rem 1rem;
    color: ${themeGet('colors.text.paragraph')};
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
  .DayPicker-Day--selected {
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
    background-color: ${props =>
      transparentize(0.1, props.theme.colors.primary)};
  }
  .DayPicker:not(.DayPicker--interactionDisabled).DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--start):not(.DayPicker-Day--end):hover {
    background-color: ${props => darken(0.2, props.theme.colors.primary)};
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: ${themeGet('colors.alt')};
    border-radius: 0;
  }
  .DayPicker-Months {
    justify-content: space-evenly;
  }
  .DayPicker-Weekday {
    color: ${themeGet('colors.text.secondary')};
    font-weight: bold;
    font-style: bold;
    text-transform: uppercase;
  }
  .DayPicker-Day--start,
  .DayPicker-Day--end {
    &:not(.DayPicker-Day--outside) {
      background-color: ${themeGet('colors.primary')} !important;
      border-radius: 0;
    }
  }
  .DayPicker-wrapper {
    padding-bottom: 0;
    outline: none;
  }
`

export default Calendar
