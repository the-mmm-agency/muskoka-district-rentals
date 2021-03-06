// @ts-nocheck
import '@material/react-list/dist/list.css'
import '@material/react-menu-surface/dist/menu-surface.css'
import '@material/react-menu/dist/menu.css'

import Menu, {
  MenuList,
  MenuListItem,
  MenuListItemText
} from '@material/react-menu'
import { withTheme } from '@xstyled/emotion'
import dayjs from 'dayjs'
import { range } from 'ramda'
import React, { useState } from 'react'
import { DateUtils } from 'react-day-picker'
import Select from 'react-select'
import { ChevronDown } from 'styled-icons/evil/ChevronDown'
import { useMediaLayout } from 'use-media'

import {
  Guests,
  Header,
  InputWrapper,
  Section,
  SectionWrapper,
  Wrapper
} from './checkAvailability.css'
import DateSection from './dateSection'
import { LakePairs } from './lakes'

import Modal from 'components/modal'
import ProductionLink from 'components/productionLink'
import Button from 'elements/button'
import Flex from 'elements/flex'
import useAvailability from 'hooks/useAvailabilityContext'
import Calendar from 'styles/calendar.css'

const CheckAvailability = ({ theme, ...props }) => {
  const { guests, handleGuests } = useAvailability();
  const [open, setOpen] = useState(false);
  const [lake, setLake] = useState([]);
  const [localRange, setLocalRange] = useState({
    from: undefined,
    to: undefined,
  });
  const [guestsActive, setGuests] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const matches = useMediaLayout(theme.breakpoints.sm);
  const handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, localRange);
    setLocalRange(range);
    if (range.to) {
      setOpen(false);
    }
  };
  const openCalendar = () => {
    setOpen(true);
  };
  const openGuestsMenu = event => {
    setMenuAnchor(event.currentTarget);
    setGuests(true);
  };

  console.log(lake);
  return (
    <Wrapper {...props}>
      <DateSection
        title="check-in"
        value={localRange?.from}
        handleClick={openCalendar}
      />
      <DateSection
        title="check-out"
        value={localRange?.to}
        handleClick={openCalendar}
      />
      <Section col={{ xs: 1 / 4, sm: 1 / 4 }}>
        <SectionWrapper borderRight="transparent !important">
          <Header>guests</Header>
          <InputWrapper
            className="mdc-menu-surface--anchor"
            onClick={openGuestsMenu}
          >
            <Guests Tag="h4">{guests}</Guests>
            <ChevronDown />
            <Menu
              open={guestsActive}
              anchorElement={menuAnchor}
              onClose={() => setGuests(false)}
              onSelected={index => handleGuests(index + 1)}
            >
              <MenuList>
                {range(1, 36).map(number => (
                  <MenuListItem key={number}>
                    <MenuListItemText primaryText={number} />
                  </MenuListItem>
                ))}
              </MenuList>
            </Menu>
          </InputWrapper>
        </SectionWrapper>
      </Section>
      <Section
        col={{ xs: 1, md: 1 / 4 }}
        backgroundColor={{ xs: 'transparent', md: 'backgroundDark' }}
        minWidth={{ xs: '20rem', md: '16rem' }}
      >
        <SectionWrapper borderRight="transparent !important" px={2}>
          <Flex justifyContent="space-between" mb={3}>
            <Select
              options={LakePairs.map(([label, value]) => ({
                label,
                value,
              }))}
              style={{ width: '100%' }}
              placeholder="Select your lakes"
              className="select"
              onChange={setLake}
              isMulti
              closeMenuOnSelect={false}
            />
          </Flex>
          <Button
            as={ProductionLink}
            linkProps={{
              m: 'auto',
              width: 1,
              mt: '3px',
            }}
            width={1}
            variant="serif"
            to={`/#?a=${dayjs(localRange?.to).format('YYYY-MM-DD')}&d=${dayjs(
              localRange?.to
            ).format('YYYY-MM-DD')}&g=${guests}&ad=2&gp=${lake
              ?.map(({ value }) => value)
              ?.join(',')}`}
          >
            check availability
          </Button>
        </SectionWrapper>
      </Section>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
        <Calendar
          css={{
            margin: 0,
          }}
          numberOfMonths={matches ? 2 : 1}
          disabledDays={{ before: localRange?.from }}
          selectedDays={[localRange?.from, { ...localRange }]}
          modifiers={{
            start: localRange?.from,
            end: localRange?.to,
          }}
          onDayClick={handleDayClick}
        />
      </Modal>
    </Wrapper>
  );
};

export default withTheme(CheckAvailability);
