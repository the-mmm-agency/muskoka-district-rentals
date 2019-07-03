import { css } from '@xstyled/emotion'
import Menu, {
  MenuList,
  MenuListItem,
  MenuListItemText,
} from '@material/react-menu'
import { Corner } from '@material/react-menu-surface'
import '@material/react-list/dist/list.css'
import '@material/react-menu-surface/dist/menu-surface.css'
import '@material/react-menu/dist/menu.css'
import { range } from 'ramda'
import React, { useState } from 'react'

import {
  Wrapper,
  SectionWrapper,
  Section,
  CheckboxLabel,
  Header,
} from './checkAvailability.css'

import Button from 'components/button'
import Box from 'components/box'
import Number from 'components/number'
import Checkbox from 'components/checkbox'
import useAvailabilityContext from 'hooks/useAvailabilityContext'
import { ReactComponent as Schedule } from 'icons/schedule.svg'
import DateInput from 'components/dateInput'
import { up } from 'theme/media'
import DownIcon from 'components/downIcon'

const CheckAvailability = () => {
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
  const handleGuestsClick = event => {
    setMenuAnchor(event.currentTarget)
    setGuests(true)
  }

  return (
    <Wrapper>
      <Section>
        <SectionWrapper>
          <Header>check-in</Header>
          <DateInput value={from} onChange={handleFrom} />
        </SectionWrapper>
      </Section>
      <Section>
        <SectionWrapper>
          <Header>check-out</Header>
          <DateInput value={to} onChange={handleTo} />
        </SectionWrapper>
      </Section>
      <Section>
        <SectionWrapper borderRight="transparent !important">
          <Header>guests</Header>
          <div
            className="mdc-menu-surface--anchor"
            css={css`
              cursor: pointer;
              text-align: left;
            `}
          >
            <Number
              css={css`
                display: inline-flex;
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
              Tag="h3"
              onClick={handleGuestsClick}
            >
              {guests}
            </Number>
            <DownIcon />
            <Menu
              css={css`
                z-index: 9999;
              `}
              open={guestsActive}
              anchorElement={menuAnchor}
              anchorCorner={Corner.TOP_LEFT}
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
          </div>
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
              <Checkbox checked={pets} onChange={handlePets} />
            </label>
            <label>
              <CheckboxLabel>Smokers</CheckboxLabel>
              <Checkbox checked={smokers} onChange={handleSmokers} />
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
