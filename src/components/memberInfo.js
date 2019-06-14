import React from 'react'
import PropTypes from 'prop-types'

const MemberInfo = ({ name, bio, title }) => (
  <div width="50%" pl={3} overflow="hidden">
    <div mb={1} pl={4} width="100%">
      <h6 color="white" fontFamily="sans" fontWeight="normal">
        {name}
      </h6>
      <span
        fontSize={5}
        color="white"
        fontWeight="bold"
        textTransform="uppercase"
      >
        {title}
      </span>
    </div>
    <div
      bg="white"
      color="text.primary"
      ml={2}
      maxWidth="100%"
      minHeight="80vh"
      p={2}
      zIndex={1001}
    >
      {bio}
    </div>
  </div>
)

MemberInfo.propTypes = {
  bio: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default MemberInfo
