import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { DateUtils } from 'react-day-picker'
import useOnClickOutside from 'use-onclickoutside'

import Button from 'components/button'
import Checkbox from 'components/checkbox'
import DateInput from 'components/dateInput'
import DatePicker from 'components/datePicker'
import DownIcon from 'components/downIcon'
import palette from 'theme/palette'
import shadows from 'theme/shadows'
import { options as typography, rhythm } from 'theme/typography'

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${rhythm(0.5)};
`

const CheckboxLabel = styled.span`
  color: ${palette.secondary};
  font-family: ${typography.headerFontFamily.join(',')};
  margin-right: ${rhythm(1 / 4)};
  vertical-align: baseline;
`

const StyledButton = styled(Button)`
  font-weight: bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 15px;
`

const Wrapper = styled.div`
  background: white;
  box-shadow: ${shadows[25]};
  display: flex;
  flex-basis: 25%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: -75px;
  height: 150px;
  min-width: 980px;
  width: 60%;
`

const DatePickerWrapper = styled.div`
  background-color: white;
  display: flex;
  padding: 0;
  position: absolute;
  min-width: 800px;
  margin-top: calc(150px + ${rhythm(1 / 2)});
  width: 100%;
`

const Section = styled.div`
  &:last-child {
    background-color: ${palette.background.dark};
  }
  padding: ${rhythm(1)};
  width: 25%;
`

const SectionWrapper = styled.div`
  border-right: ${properties =>
    properties.noBorder ? 'none' : `1px solid rgba(0, 0, 0, .1)`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`

const Header = styled.span`
  color: ${palette.text.secondary};
  font-weight: 700;
  font-size: 0.875rem;
  width: 100%;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 15px;
`

const Day = styled.h1`
  font-weight: 500;
  font-size: 3.3rem;
  vertical-align: baseline;
  height: 50px;
`

const CheckAvailability = () => {
  const [dates, setDates] = useState({ from: undefined, to: undefined })
  const [datePicker, setDatePicker] = useState(false)
  const [pets, setPets] = useState(false)
  const [smokers, setSmokers] = useState(false)
  const datePickerReference = useRef(null)
  const handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, dates)
    setDates(range)
  }

  const toggleDatePicker = () => {
    setDatePicker(!datePicker)
  }

  useOnClickOutside(datePickerReference, () => {
    setDatePicker(false)
  })

  return (
    <Wrapper>
      <Section>
        <SectionWrapper>
          <Header>check-in</Header>
          <DateInput value={dates.from} onClick={toggleDatePicker} />
        </SectionWrapper>
      </Section>
      <Section>
        <SectionWrapper>
          <Header>check-out</Header>
          <DateInput value={dates.to} onClick={toggleDatePicker} />
        </SectionWrapper>
      </Section>
      <DatePickerWrapper ref={datePickerReference}>
        <DatePicker
          from={dates.from}
          to={dates.to}
          handleDayClick={handleDayClick}
          open={datePicker}
        />
      </DatePickerWrapper>
      <Section>
        <SectionWrapper noBorder>
          <Header>guests</Header>
          <Day>
            03 <DownIcon />
          </Day>
        </SectionWrapper>
      </Section>
      <Section>
        <SectionWrapper noBorder>
          <CheckboxWrapper>
            <label>
              <CheckboxLabel>Pets</CheckboxLabel>
              <Checkbox
                checked={pets}
                onChange={e => {
                  setPets(e.target.checked)
                }}
              />
            </label>
            <label>
              <CheckboxLabel>Smokers</CheckboxLabel>
              <Checkbox
                checked={smokers}
                onChange={e => {
                  setSmokers(e.target.checked)
                }}
              />
            </label>
          </CheckboxWrapper>
          <StyledButton font="serif">check availability</StyledButton>
        </SectionWrapper>
      </Section>
    </Wrapper>
  )
}

export default CheckAvailability
