import React from 'react'
import { css } from '@emotion/core'
import { useNumber } from 'react-hanger'
import Img from 'gatsby-image'
import { motion, AnimatePresence } from 'framer-motion'

import { teamPropTypes } from './ourTeam'
import MemberInfo from './memberInfo'
import MemberList from './memberList'

import Flex from 'components/flex'
import Heading from 'components/heading'

const OurTeam = ({ team }) => {
  const selected = useNumber(0, {
    lowerLimit: 0,
    upperLimit: team.length - 1,
    loop: true,
  })
  const current = team[selected.value]
  const colors = ['#1A2021', '#22293A']
  return (
    <Flex
      as="section"
      position="relative"
      flexDirection="column"
      minHeight="100vh"
      overflow="hidden"
      color="white"
      backgroundColor="white"
      css={css`
        &::before {
          position: absolute;
          z-index: 0;
          min-width: 100%;
          height: calc(60vh + 24.3rem);
          background-color: ${colors[selected.value]};
          content: '';
        }
      `}
    >
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
                enter={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ width: '100%', height: '60vh' }}
                key={current.id}
              >
                <Img
                  css={css`
                    height: 100%;
                  `}
                  fluid={current.picture.childImageSharp.fluid}
                  objectFit="contain"
                />
              </motion.div>
            </AnimatePresence>
          </Flex>
          <MemberList team={team} selected={selected} />
        </Flex>
      </Flex>
    </Flex>
  )
}

OurTeam.propTypes = teamPropTypes

export default OurTeam
