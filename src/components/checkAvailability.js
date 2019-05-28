import useOnClickOutside from 'use-onclickoutside'
import css from '@styled-system/css'
import { DateUtils } from 'react-day-picker'
import styled from '@emotion/styled'
import React, { useRef, useState } from 'react'

import Flex from 'elements/flex'
import Text from 'elements/text'
import Button from 'components/button'
import Checkbox from 'components/checkbox'
import DateInput from 'components/dateInput'
import DatePicker from 'components/datePicker'
import DownIcon from 'components/downIcon'
import palette from 'theme/palette'
import shadows from 'theme/shadows'
import { rhythm } from 'theme/typography'

const CheckboxLabel = styled(Text)(
  css({
    mr: 3,
    color: 'secondary',
    fontFamily: 'serif',
  })
)

const StyledButton = styled(Button)`
  margin-bottom: 15px;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  display: flex;
  flex-basis: 25%;
  width: 60%;
  min-width: 980px;
  height: 150px;
  margin: auto;
  margin-top: -75px;
  background: white;
  box-shadow: ${shadows[25]};
`

const DatePickerWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  min-width: 800px;
  margin-top: calc(150px + ${rhythm(1 / 2)});
  padding: 0;
  background-color: white;
`

const Section = styled.div`
  &:last-child {
    background-color: ${palette.background.dark};
  }
  width: 25%;
  padding: ${rhythm(1)};
`

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-right: ${properties =>
    properties.noBorder ? 'none' : `1px solid rgba(0, 0, 0, .1) `};
`

const Header = styled.span`
  width: 100%;
  margin-bottom: 15px;
  color: ${palette.text.secondary};
  font-weight: 700;
  font-size: 0.875rem;
  text-align: left;
  text-transform: uppercase;
`

const Day = styled.h1`
  height: 50px;
  font-weight: 500;
  font-size: 3.3rem;
  vertical-align: baseline;
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
          <Flex justifyContent="space-between" mb={1}>
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
          </Flex>
          <StyledButton fontFamily="serif">check availability</StyledButton>
        </SectionWrapper>
      </Section>
    </Wrapper>
  )
}

export default CheckAvailability
