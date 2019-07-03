import React, { useState } from 'react'
import { css } from '@xstyled/emotion'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

import { Wrapper, Day, Month } from './dateInput.css'

import Calendar from 'styles/calendar.css'
import Modal from 'components/modal'
import DownIcon from 'components/downIcon'

const DateInput = ({ value, onChange }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Wrapper onClick={() => setOpen(true)}>
        <Month>{dayjs(value).format('MMM')} / </Month>
        <Day>{dayjs(value).format('DD')}</Day>
        <DownIcon />
      </Wrapper>
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
    </>
  )
}

DateInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
}

export default DateInput
