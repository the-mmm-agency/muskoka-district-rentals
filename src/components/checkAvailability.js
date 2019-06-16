import useOnClickOutside from 'use-onclickoutside'
import Reveal from 'react-reveal/Reveal'
import css from '@styled-system/css'
import { useInput } from 'react-hanger'
import dayjs from 'dayjs'
import { DateUtils } from 'react-day-picker'
import styled from '@emotion/styled'
import themeGet from '@styled-system/theme-get'
import React, { useRef, useState } from 'react'

import Button from 'components/button'
import Number from 'components/number'
import Checkbox from 'components/checkbox'
import { ReactComponent as Schedule } from 'icons/schedule.svg'
import DateInput from 'components/dateInput'
import DatePicker from 'components/datePicker'
import DownIcon from 'components/downIcon'

const CheckboxLabel = styled.span(
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
  @media screen and (min-width: ${themeGet('breakpoints.1')}) {
    background: ${themeGet('colors.background.light')};
    flex-wrap: nowrap;
    height: 200px;
    box-shadow: ${themeGet('shadows.25')};
    margin-bottom: ${themeGet('space.5')};
    position: relative;
    border-color: transparent;
  }
  flex-wrap: wrap;
  display: flex;
  flex-basis: 25%;
  justify-content: center;
  margin: auto;
  border-bottom: 0.5px solid;
  border-color: ${themeGet('colors.text.secondary')};
  width: 100%;
  margin-top: ${themeGet('space.3')};
`

const DatePickerWrapper = styled.div`
  @media screen and (min-width: ${themeGet('breakpoints.1')}) {
    left: 0px;
    width: 100vw;
  }
  position: absolute;
  display: flex;
  width: 100%;
  margin-top: calc(150px + ${themeGet('space.1')});
  padding: 0;
  background-color: white;
`

const Section = styled.div`
  @media screen and (min-width: ${themeGet('breakpoints.1')}) {
    &:last-child {
      background-color: ${themeGet('colors.background.dark')};
    }
    width: 25%;
  }
  @media screen and (max-width: ${themeGet('breakpoints.1')}) {
    &:last-child {
      width: 50%;
    }
  }
  width: calc(100% / 3);
  padding: ${themeGet('space.3')};
`

const SectionWrapper = styled.div`
  @media screen and (max-width: ${themeGet('breakpoints.1')}) {
    width: 100%;
  }
  @media screen and (min-width: ${themeGet('breakpoints.1')}) {
    border-right: ${props =>
      props.noBorder ? 'none' : `1px solid rgba(0, 0, 0, .1) `};
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: ${themeGet('space.2')} ${themeGet('space.2')};
  height: 100%;
`

const Header = styled.span`
  width: 100%;
  margin-bottom: ${themeGet('space.1')};
  color: ${themeGet('colors.text.secondary')};
  font-weight: 700;
  font-size: 0.875rem;
  text-align: left;
  text-transform: uppercase;
`

const Day = styled.h1`
  @media screen and (min-width: ${themeGet('breakpoints.1', '200px')}) {
    line-height: 1.4;
  }
  height: 50px;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 3.3rem;
  line-height: 1.85;
  vertical-align: baseline;
  margin-right: auto;
`

const CheckAvailability = () => {
  const [dates, setDates] = useState({
    from: dayjs().toDate(),
    to: dayjs()
      .add(1, 'month')
      .toDate(),
  })
  const [guestsActive, setGuests] = useState(false)
  const guests = useInput(3)
  const [datePicker, setDatePicker] = useState(false)
  const [pets, setPets] = useState(false)
  const [smokers, setSmokers] = useState(false)
  const datePickerReference = useRef(null)
  const handleGuestsBlur = () => {
    setGuests(false)
  }
  const handleGuestsClick = () => {
    setGuests(true)
  }
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
      <DatePickerWrapper css={{ zIndex: 9999 }} ref={datePickerReference}>
        <Reveal
          appear
          effect="fadeInUp"
          ssrReveal
          duration={500}
          when={datePicker}
        >
          <DatePicker
            from={dates.from}
            to={dates.to}
            handleDayClick={handleDayClick}
            open
          />
        </Reveal>
      </DatePickerWrapper>
      <Section>
        <SectionWrapper noBorder>
          <Header>guests</Header>
          {guestsActive ? (
            <input
              type="number"
              value={guests.value}
              onBlur={handleGuestsBlur}
              onChange={guests.onChange}
            />
          ) : (
            <div display="inline-flex">
              <Number
                mr="auto"
                Tag="h3"
                css={{
                  height: 50,
                  lineHeight: 1.85,
                  fontWeight: 500,
                }}
                onClick={handleGuestsClick}
              >
                {guests.value}
              </Number>{' '}
              <DownIcon />
            </div>
          )}
        </SectionWrapper>
      </Section>
      <Section>
        <SectionWrapper noBorder>
          <div display="flex" justifyContent="space-between" mb={1}>
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
          </div>
          <StyledButton fontFamily="serif">
            check availability <Schedule />
          </StyledButton>
        </SectionWrapper>
      </Section>
    </Wrapper>
  )
}

export default CheckAvailability
