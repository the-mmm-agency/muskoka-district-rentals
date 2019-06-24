import useOnClickOutside from 'use-onclickoutside'
import Reveal from 'react-reveal/Reveal'
import styled, { css } from '@xstyled/emotion'
import { useInput } from 'react-hanger'
import dayjs from 'dayjs'
import { DateUtils } from 'react-day-picker'
import React, { useRef, useState } from 'react'

import Button from 'components/button'
import Box from 'components/box'
import Flex from 'components/flex'
import Number from 'components/number'
import Checkbox from 'components/checkbox'
import { ReactComponent as Schedule } from 'icons/schedule.svg'
import DateInput from 'components/dateInput'
import DatePicker from 'components/datePicker'
import { up } from 'theme/media'
import DownIcon from 'components/downIcon'

const Wrapper = styled(Flex)`
  ${up('md')} {
    flex-wrap: nowrap;
    height: 200px;
    background-color: backgroundLight;
    border-color: transparent;
    box-shadow: 25;
  }
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  border-bottom: 0.5px solid;
  border-color: textSecondary;
  width: 100%;
  margin-top: 3;
  z-index: 100;
`

const SectionWrapper = styled(Flex)`
  ${up('md')} {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin: 2;
  height: 100%;
`

const CheckboxLabel = styled.span`
  margin-right: 2;
  color: secondary;
  font-family: serif;
`

const Section = styled(Flex)`
  ${up('md')} {
    flex: 0 0 25%;
    max-width: 25%;
  }
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(100% / 3);
  max-width: calc(100% / 3);
  padding: 3;
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
      <Reveal
        appear
        effect="fadeInUp"
        ssrReveal
        duration={500}
        when={datePicker}
      >
        <Box
          css={css`
            ${up('sm')} {
              left: 0;
              width: 100vw;
            }
            position: absolute;
            display: flex;
            width: 100%;
            left: 0px;
            margin-top: calc(150px + 0.3rem);
            padding: 0;
            background-color: white;
            z-index: 9999;
          `}
          ref={datePickerReference}
        >
          <DatePicker
            from={dates.from}
            to={dates.to}
            handleDayClick={handleDayClick}
            open
          />
        </Box>
      </Reveal>
      <Section>
        <SectionWrapper borderRight="transparent !important">
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
        col={{ xs: 1, md: 1 / 4 }}
        backgroundColor={{ xs: 'transparent', md: 'backgroundDark' }}
        minWidth={{ xs: '20rem', sm: 0 }}
      >
        <SectionWrapper borderRight="transparent !important">
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
            check availability <Schedule />
          </Button>
        </SectionWrapper>
      </Section>
    </Wrapper>
  )
}

export default CheckAvailability
