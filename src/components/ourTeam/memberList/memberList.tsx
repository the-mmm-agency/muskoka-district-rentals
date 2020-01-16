import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { ChevronRight } from 'styled-icons/evil/ChevronRight'

import { OurTeamProps } from '../ourTeam.types'
import {
  Item,
  List,
  NextButton,
  TeamMember
} from './memberList.css'

import Flex from 'elements/flex'
import Text from 'elements/text'

interface MemberListProps extends OurTeamProps {
  handleClick: () => void;
}

const MemberList: React.FC<MemberListProps> = ({ team, handleClick }) => (
  <Flex width={1} height="300px">
    <List>
      <AnimatePresence exitBeforeEnter>
        {team.map(({ id, name, picture }) => (
          <Item
            length={team.length}
            positionTransition={{ type: 'tween' }}
            exit={{ opacity: 0 }}
            onClick={handleClick}
            key={id}
          >
            <TeamMember fluid={picture.childImageSharp.fluid}>
              <Text mt="50%" fontWeight="bold" textTransform="uppercase">
                {name}
              </Text>
            </TeamMember>
          </Item>
        ))}
      </AnimatePresence>
    </List>
    <NextButton onClick={handleClick}>
      <ChevronRight title="Next Member" />
    </NextButton>
  </Flex>
);
export default MemberList;
