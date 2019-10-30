import React from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence } from 'framer-motion'

import { Wrapper, Info, Name, Title, Bio } from './memberInfo.css'
import { wrapper, item } from './transitions'

const MemberInfo = ({ id, name, bio, title }) => (
  <AnimatePresence initial={false} exitBeforeEnter>
    <Wrapper key={id} {...wrapper}>
      <Info {...item}>
        <Name>{name}</Name>
        <Title>{title}</Title>
      </Info>
      <Bio {...item}>
        <p>{bio}</p>
      </Bio>
    </Wrapper>
  </AnimatePresence>
)

MemberInfo.propTypes = {
  bio: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default MemberInfo
