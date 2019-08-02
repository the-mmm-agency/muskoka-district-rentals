import React from 'react'
import { Link } from 'gatsby'
import { HomeAlt as Home } from 'styled-icons/boxicons-regular/HomeAlt'
import { FormatListBulleted as Cottages } from 'styled-icons/material/FormatListBulleted'
import { Envelope as Contact } from 'styled-icons/boxicons-regular/Envelope'
import { PhoneCall as Call } from 'styled-icons/boxicons-regular/PhoneCall'

import AppBar from './bottomBar.css'

const BottomBar = () => (
  <AppBar>
    <Link to="/">
      <Home />
    </Link>
    <Link to="/cottages">
      <Cottages />
    </Link>
    <a href="tel:1800-615-2537">
      <Call />
    </a>
    <Link to="/contact">
      <Contact />
    </Link>
  </AppBar>
)

export default BottomBar
