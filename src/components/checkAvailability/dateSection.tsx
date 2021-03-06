import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import React from 'react'
import { ChevronDown } from 'styled-icons/evil/ChevronDown'

import {
  Day,
  Header,
  InputWrapper,
  Month,
  Section,
  SectionWrapper
} from './checkAvailability.css'

const DateSection = ({ value, handleClick, title }) => (
  <Section>
    <SectionWrapper>
      <Header>{title}</Header>
      <InputWrapper onClick={handleClick}>
        <Month>{dayjs(value).format('MMM')}&nbsp;/&nbsp;</Month>
        <Day>{dayjs(value).format('DD')}</Day>
        <ChevronDown />
      </InputWrapper>
    </SectionWrapper>
  </Section>
);

DateSection.propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Date),
};

export default DateSection;
