import React from 'react'
import posed from 'react-pose'
import { Link } from 'gatsby'

import Flex from 'components/flex'
import { ReactComponent as Home } from 'icons/home.svg'
import { ReactComponent as Cottages } from 'icons/list-ul.svg'
import { ReactComponent as Contact } from 'icons/at.svg'
import { ReactComponent as Call } from 'icons/phone.svg'

const BottomBar = () => (
  <Flex
    css={{
      svg: {
        width: 32,
        marginTop: 4,
      },
    }}
    alignItems="center"
    backgroundColor="white"
    position="fixed"
    bottom={0}
    boxShadow={2}
    width="100vw"
    height={56}
    justifyContent="space-evenly"
  >
    <Link to="/">
      <Home />
    </Link>
    <Link to="/cottages">
      <Cottages />
    </Link>
    <Link to="/contact">
      <Contact />
    </Link>
    <a href="tel:1800-615-2537">
      <Call />
    </a>
  </Flex>
)

export default BottomBar
