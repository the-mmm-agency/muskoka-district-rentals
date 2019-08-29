import React from 'react'
import Img from 'gatsby-image'

import { teamPropTypes } from './ourTeam'

import Flex from 'elements/flex'
import Text from 'elements/text'
import Heading from 'elements/heading'

const OurTeam = ({ team }) => (
  <Flex as="section" flexDirection="column">
    <Heading
      my={3}
      letterSpacing="caps"
      textAlign="center"
      textTransform="uppercase"
    >
      Our Team
    </Heading>
    <Flex flexDirection="column">
      {team.map(({ id, picture, name, title, bio }) => (
        <Flex key={id} flexDirection="column">
          <Img fluid={picture.childImageSharp.fluid} />
          <Flex flexDirection="column" p={3}>
            <Heading as="h5" mb={0}>
              {name}
            </Heading>
            <Text fontSize={6} mb={3} fontWeight="bold">
              {title}
            </Text>
            <p>{bio}</p>
          </Flex>
        </Flex>
      ))}
    </Flex>
  </Flex>
)

OurTeam.propTypes = teamPropTypes

export default OurTeam
