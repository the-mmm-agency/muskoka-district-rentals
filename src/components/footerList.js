import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import FooterLink from 'components/footerLink'

const List = styled.ul`
  list-style: none;
`
const FooterList = ({ links }) => {
  return (
    <List>
      {links.map(link => (
        <FooterLink to={link} key={link} />
      ))}
    </List>
  )
}

FooterList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FooterList
