import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

import { Bio, Info, Name, Title, Wrapper } from './memberInfo.css';
import { item, wrapper } from './transitions';

const MemberInfo = ({ id, name, bio, title }) => (
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

MemberInfo.propTypes = {
  bio: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MemberInfo;
