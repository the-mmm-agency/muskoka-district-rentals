import { AnimatePresence } from 'framer-motion'
import React from 'react'

import { Member } from '../ourTeam.types'
import {
  Bio,
  Info,
  Name,
  Title,
  Wrapper
} from './memberInfo.css'
import { item, wrapper } from './transitions'

type MemberInfoProps = Omit<Member, 'picture'>;

const MemberInfo: React.FC<MemberInfoProps> = ({ id, name, bio, title }) => (
  <AnimatePresence initial={false} exitBeforeEnter>
    <Wrapper key={id} {...wrapper}>
      <Info {...item}>
        <Name>{name}</Name>
        <Title>{title}</Title>
      </Info>
      <Bio {...item}>
        <p>{bio}</p>
      </Bio>
    </Wrapper>
  </AnimatePresence>
);

export default MemberInfo;
