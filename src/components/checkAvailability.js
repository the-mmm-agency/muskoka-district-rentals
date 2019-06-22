import useOnClickOutside from 'use-onclickoutside'
import Reveal from 'react-reveal/Reveal'
import styled, { css } from '@xstyled/emotion'
import { useInput } from 'react-hanger'
import dayjs from 'dayjs'
import { DateUtils } from 'react-day-picker'
import React, { useRef, useState } from 'react'

import Button from 'components/button'
import Box from 'components/box'
import Number from 'components/number'
import Checkbox from 'components/checkbox'
import { ReactComponent as Schedule } from 'icons/schedule.svg'
import DateInput from 'components/dateInput'
import DatePicker from 'components/datePicker'
import { up } from 'theme/media'
import DownIcon from 'components/downIcon'

const CheckboxLabel = styled.span`
  margin-right: 3;
  color: secondary;
  font-family: serif;
`

const Section = styled(Box)`
  ${up('md')} {
    width: 25%;
  }
  width: calc(100% / 3);
  padding: 3;
`

const SectionWrapper = styled(Box)`
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2;
  height: 100%;
`

const Header = styled.span`
  width: 100%;
  margin-bottom: 2;
  color: textSecondary;
  font-weight: 700;
  font-size: 0.875rem;
  text-align: left;
  text-transform: uppercase;
`

const Wrapper = styled(Box)`
  ${up('sm')} {
    position: relative;
    flex-wrap: nowrap;
    height: 200px;
    margin-bottom: 5;
    background: white;
    border-color: transparent;
    box-shadow: 25;
  }
  &:last-of-type {
    ${up('sm')} {
      div {
        background-color: backgroundDark;
      }
    }
  }
  &:nth-last-of-type(2) {
    div {
      border: none;
    }
  }
  flex-wrap: wrap;
  flex-basis: 25%;
  justify-content: center;
  display: flex;
  margin: auto;
  border-bottom: 0.5px solid;
  border-color: textSecondary;
  width: 100%;
  margin-top: 3;
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
      <Box
        css={css`
          ${up('sm')} {
            left: 0;
            width: 100vw;
          }
          position: absolute;
          display: flex;
          width: 100%;
          margin-top: calc(150px + 0.3rem);
          padding: 0;
          background-color: white;
          z-index: 9999;
        `}
        ref={datePickerReference}
      >
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
      </Box>
      <Section>
        <SectionWrapper>
          <Header>guests</Header>
          {guestsActive ? (
            <input
              type="number"
              value={guests.value}
              onBlur={handleGuestsBlur}
              onChange={guests.onChange}
            />
          ) : (
            <Box display="inline-flex">
              <Number
                Tag="h3"
                css={css`
                  ${up('sm')} {
                    line-height: 1.4;
                  }
                  height: 50px;
                  line-height: 1.85;
                  font-weight: 500;
                  font-size: 3.3rem;
                  vertical-align: baseline;
                  margin-right: auto;
                `}
                onClick={handleGuestsClick}
              >
                {guests.value}
              </Number>{' '}
              <DownIcon />
            </Box>
          )}
        </SectionWrapper>
      </Section>
      <Section
        backgroundColor={{ xs: 'transparent', md: 'backgroundDark' }}
        width={{ xs: 0.5 }}
      >
        <SectionWrapper>
          <Box display="flex" justifyContent="space-between" mb={1}>
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
          </Box>
          <Button mb={2} variant="serif">
            check availability{' '}
            <Schedule
              css={css`
                fill: white;
              `}
            />
          </Button>
        </SectionWrapper>
      </Section>
    </Wrapper>
  )
}

export default CheckAvailability
