import React, { useState } from 'react'
import { css } from '@xstyled/emotion'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import { ChevronDown } from 'styled-icons/evil/ChevronDown'

import {
  Day,
  Month,
  InputWrapper,
  Section,
  Header,
  SectionWrapper,
} from './checkAvailability.css'

import Calendar from 'styles/calendar.css'
import Modal from 'components/modal'

const DateSection = ({ value, onChange, title }) => {
  const [open, setOpen] = useState(false)
  return (
    <Section>
      <SectionWrapper>
        <Header>{title}</Header>
        <InputWrapper onClick={() => setOpen(true)}>
          <Month>{dayjs(value).format('MMM')}&nbsp;/&nbsp;</Month>
          <Day>{dayjs(value).format('DD')}</Day>
          <ChevronDown />
        </InputWrapper>
        <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
          <Calendar
            css={css`
              margin: 0;
            `}
            onDayClick={day => {
              onChange(day)
              setOpen(false)
            }}
          />
        </Modal>
      </SectionWrapper>
    </Section>
  )
}

DateSection.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Date),
}

export default DateSection
