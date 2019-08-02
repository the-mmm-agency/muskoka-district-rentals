import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Info, Name, Title, Bio } from './memberInfo.css'

const MemberInfo = ({ name, bio, title, pose }) => (
  <Wrapper pose={pose}>
    <Info>
      <Name>{name}</Name>
      <Title>{title}</Title>
    </Info>
    <Bio>
      <p>{bio}</p>
    </Bio>
  </Wrapper>
)

MemberInfo.propTypes = {
  bio: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pose: PropTypes.bool.isRequired,
  title: PropTypes.oneOf(['enter', 'exit']).isRequired,
}

export default MemberInfo
