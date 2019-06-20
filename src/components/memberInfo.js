import React from 'react'
import PropTypes from 'prop-types'

import Box from 'components/box'

const MemberInfo = ({ name, bio, title }) => (
  <Box width="50%" pl={3} overflow="hidden">
    <Box mb={1} pl={4} width="100%">
      <Box as="h6" color="white" fontFamily="sans" fontWeight="normal">
        {name}
      </Box>
      <Box
        as="span"
        fontSize={5}
        color="white"
        fontWeight="bold"
        textTransform="uppercase"
      >
        {title}
      </Box>
    </Box>
    <Box
      bg="white"
      color="textPrimary"
      ml={2}
      maxWidth="100%"
      minHeight="80vh"
      p={2}
      zIndex={1001}
    >
      {bio}
    </Box>
  </Box>
)

MemberInfo.propTypes = {
  bio: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default MemberInfo
