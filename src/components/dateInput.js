import React from 'react'
import dayjs from 'dayjs'
import styled from '@emotion/styled'
import { themeGet } from 'styled-system'
import PropTypes from 'prop-types'

import DownIcon from 'components/downIcon'

const Wrapper = styled.span`
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-start;
  cursor: pointer;
`

const Day = styled.h1`
  @media screen and (min-width: ${themeGet('breakpoints.0', '200px')}) {
    line-height: 1.4;
  }
  height: 50px;
  line-height: 1.85;
  color: #000;
  font-weight: 500;
  font-size: 3.3rem;
  vertical-align: baseline;
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
