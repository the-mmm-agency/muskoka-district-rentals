import Menu, {
  MenuList,
  MenuListItem,
  MenuListItemText,
} from '@material/react-menu'
import '@material/react-list/dist/list.css'
import '@material/react-menu-surface/dist/menu-surface.css'
import '@material/react-menu/dist/menu.css'
import { range } from 'ramda'
import React, { useState } from 'react'

import {
  InputWrapper,
  Guests,
  Wrapper,
  SectionWrapper,
  Section,
  Header,
} from './checkAvailability.css'
import DateSection from './dateSection'
import LabelCheck from './labelCheck'

import Button from 'components/button'
import Flex from 'components/flex'
import useAvailabilityContext from 'hooks/useAvailabilityContext'
import DownIcon from 'components/downIcon'

const CheckAvailability = props => {
  const {
    from,
    to,
    handleFrom,
    handleTo,
    pets,
    smokers,
    handlePets,
    handleSmokers,
    guests,
    handleGuests,
  } = useAvailabilityContext()
  const [guestsActive, setGuests] = useState(false)
  const [menuAnchor, setMenuAnchor] = useState(null)
  const openGuestsMenu = event => {
    setMenuAnchor(event.currentTarget)
    setGuests(true)
  }

  return (
    <Wrapper {...props}>
      <DateSection title="check-in" value={from} onChange={handleFrom} />
      <DateSection title="check-out" value={to} onChange={handleTo} />
      <Section col={{ xs: 1 / 4, sm: 1 / 4 }}>
        <SectionWrapper borderRight="transparent !important">
          <Header>guests</Header>
          <InputWrapper
            className="mdc-menu-surface--anchor"
            onClick={openGuestsMenu}
          >
            <Guests Tag="h4">{guests}</Guests>
            <DownIcon />
            <Menu
              open={guestsActive}
              anchorElement={menuAnchor}
              onClose={() => setGuests(false)}
              onSelected={index => handleGuests(index + 1)}
            >
              <MenuList>
                {range(1, 15).map(number => (
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
            <LabelCheck label="Pets" checked={pets} onChange={handlePets} />
            <LabelCheck
              label="Smokers"
              checked={smokers}
              onChange={handleSmokers}
            />
          </Flex>
          <Button
            linkProps={{
              m: 'auto',
            }}
            variant="serif"
            href="/cottages"
          >
            check availability
          </Button>
        </SectionWrapper>
      </Section>
    </Wrapper>
  )
}

export default CheckAvailability
