import { css } from '@emotion/core';
import { AnimatePresence, motion } from 'framer-motion';
import React, { memo, useMemo } from 'react';
import { ChevronRight } from 'styled-icons/evil/ChevronRight';

import { NextButton, TeamMember } from './memberList.css';

import Flex from 'elements/flex';
import Text from 'elements/text';

interface MemberListProps {
  selected: {
    value: number;
    increase: VoidFunction;
    decrease: VoidFunction;
  };
  team: string[];
}

const MemberList: React.FC<MemberListProps> = ({ selected, team }) => {
  const members = useMemo(
    () =>
      team
        .slice(selected.value, team.length)
        .concat(team.slice(0, selected.value)),
    [team, selected]
  );
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
              exit={{ opacity: 0 }}
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
  );
};
export default memo(MemberList, () => false);
