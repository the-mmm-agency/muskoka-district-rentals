import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import DownIcon from 'components/downIcon'

const Wrapper = styled.span`
  align-items: flex-end;
  cursor: pointer;
  justify-content: flex-start;
  display: inline-flex;
`

const Day = styled.h1`
  font-weight: 500;
  vertical-align: baseline;
`

const Month = styled.h3`
  font-weight: 400;
  vertical-align: baseline;
`

const DateInput = ({ onClick, value }) => (
  <Wrapper onClick={onClick}>
    <Month>{dayjs(value).format('MMM')} / </Month>
    <Day>{dayjs(value).format('DD')}</Day>
    <DownIcon />
  </Wrapper>
)

DateInput.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
}

export default DateInput