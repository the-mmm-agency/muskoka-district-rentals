import React from 'react'
import { HomeAlt as Home } from 'styled-icons/boxicons-regular/HomeAlt'
import { FormatListBulleted as Cottages } from 'styled-icons/material/FormatListBulleted'
import { Envelope as Contact } from 'styled-icons/boxicons-regular/Envelope'
import { PhoneCall as Call } from 'styled-icons/boxicons-regular/PhoneCall'

import MobileNavigationItem from './mobileNavigationItem'
import AppBar from './mobileNavigation.css'

import Hidden from 'components/hidden'

const BottomBar = () => (
  <Hidden up="md">
    <AppBar>
      <MobileNavigationItem to="/" icon={<Home />} />
      <MobileNavigationItem to="/cottages" icon={<Cottages />} />
      <MobileNavigationItem href="tel:1800-615-2537" icon={<Call />} />
      <MobileNavigationItem to="/contact" icon={<Contact />} />
    </AppBar>
  </Hidden>
)

export default BottomBar
