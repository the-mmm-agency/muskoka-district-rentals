import React, { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'styled-icons/evil/ChevronRight'

import { NextButton, TeamMember } from './memberList.css'

import Flex from 'elements/flex'
import Text from 'elements/text'

const MemberList = ({ selected, team }) => {
  const members = useMemo(
    () =>
      team
        .slice(selected.value, team.length)
        .concat(team.slice(0, selected.value)),
    [team, selected]
  )
  return (
    <Flex width={1} height="300px">
      <motion.ul
        css={css`
          display: flex;
          flex: 0 0 75%;
          margin: 0;
        `}
      >
        <AnimatePresence exitBeforeEnter>
          {members.map(({ id, name, picture }) => (
            <motion.li
              css={css`
                flex: 0 0 calc(100% / ${team.length});
                list-style: none;
              `}
              positionTransition={{ type: 'tween' }}
              key={id}
            >
              <TeamMember fluid={picture.childImageSharp.fluid}>
                <Text mt="50%" fontWeight="bold" textTransform="uppercase">
                  {name}
                </Text>
              </TeamMember>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      <NextButton onClick={() => selected.increase()}>
        <ChevronRight title="Next Member" />
      </NextButton>
    </Flex>
  )
}

MemberList.propTypes = {
  selected: PropTypes.shape({
    value: PropTypes.number.isRequired,
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired,
  }).isRequired,
  team: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      picture: PropTypes.object.isRequired,
    }).isRequired
  ).isRequired,
}

export default memo(MemberList, () => false)
