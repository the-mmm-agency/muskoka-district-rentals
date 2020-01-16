import { AnimatePresence, motion } from 'framer-motion'
import Img from 'gatsby-image'
import React, { useMemo } from 'react'
import { useNumber } from 'react-hanger'

import MemberInfo from './memberInfo'
import MemberList from './memberList'
import { Root } from './ourTeam.desktop.css'
import { OurTeamProps } from './ourTeam.types'

import Flex from 'elements/flex'
import Heading from 'elements/heading'

const OurTeam: React.FC<OurTeamProps> = ({ team }) => {
  const selected = useNumber(0, {
    lowerLimit: 0,
    upperLimit: team.length - 1,
    loop: true,
  });
  const current = team[selected.value];
  const colors = ['#1A2021', '#22293A'];
  const members = useMemo(
    () =>
      team
        .slice(selected.value, team.length)
        .concat(team.slice(0, selected.value)),
    [selected.value]
  );
  return (
    <Root color={colors[selected.value]}>
      <Heading
        my={6}
        letterSpacing="caps"
        color="white"
        textAlign="center"
        textTransform="uppercase"
        zIndex={1}
      >
        Our Team
      </Heading>
      <Flex
        flexWrap="nowrap"
        pl={{ xl: 6, lg: 5, md: 4, sm: 3, xs: 2 }}
        minWidth={1}
        justifyContent="flex-end"
      >
        <MemberInfo
          id={current.id}
          name={current.name}
          bio={current.bio}
          title={current.title}
        />
        <Flex flexDirection="column" flexWrap="nowrap" minWidth={0.5}>
          <Flex minWidth="100%" minHeight="60vh">
            <AnimatePresence initial={false} exitBeforeEnter>
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ width: '100%', height: '60vh' }}
                key={current.id}
              >
                <Img
                  css={{ height: '100%' }}
                  fluid={current.picture.childImageSharp.fluid}
                />
              </motion.div>
            </AnimatePresence>
          </Flex>
          <MemberList
            team={members}
            handleClick={() => {
              selected.increase();
            }}
          />
        </Flex>
      </Flex>
    </Root>
  );
};

export default OurTeam;
