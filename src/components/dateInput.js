import React from 'react'
import dayjs from 'dayjs'
import styled from '@xstyled/emotion'
import PropTypes from 'prop-types'

import { up } from 'theme/media'
import DownIcon from 'components/downIcon'

const Wrapper = styled.span`
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-start;
  cursor: pointer;
  padding-right: 1rem;
`

const Day = styled.h4`
  ${up('sm')} {
    line-height: 1.4;
  }
  height: 50px;
  line-height: 1.85;
  font-weight: 500;
  font-size: 3.3rem;
  vertical-align: baseline;
  margin-right: auto;
`

const Month = styled.h5`
  font-weight: 400;
  vertical-align: baseline;
  white-space: nowrap;
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
