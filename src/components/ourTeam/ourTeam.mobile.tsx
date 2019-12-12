import Heading from 'elements/heading'
import Text from 'elements/text'
import React from 'react'

import { teamPropTypes } from './ourTeam'
import { MemberImage } from './ourTeam.mobile.css'
import { OurTeamProps } from './ourTeam.types'
import Flex from 'elements/flex'

const OurTeam: React.FC<OurTeamProps> = ({ team }) => (
  <Flex as="section" flexDirection="column">
    <hr />
    <Heading my={3} textAlign="center">
      Our Team
    </Heading>
    <Flex flexDirection="column">
      {team.map(({ id, picture, name, title, bio }) => (
        <Flex key={id} flexDirection="column">
          <MemberImage fluid={picture.childImageSharp.fluid}>
            <Heading as="h4" mb={0}>
              {name}
            </Heading>
            <Text fontSize={6} mb={3} fontWeight="bold">
              {title}
            </Text>
          </MemberImage>
          <Flex flexDirection="column" p={3}>
            <Text as="p" maxWidth={0.8} ml={2}>
              {bio}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  </Flex>
);

export default OurTeam;
