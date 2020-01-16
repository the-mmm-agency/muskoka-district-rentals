import styled from '@xstyled/emotion'
import { motion } from 'framer-motion'
import BackgroundImage from 'gatsby-background-image'

import { transition } from 'theme/transitions'

export const List = styled(motion.ul)`
  display: flex;
  flex: 0 0 75%;
  margin: 0;
`;

export const Item = styled(motion.li)<Record<'length', number>>`
  flex: 0 0 calc(100% / ${props => props.length});
  cursor: pointer;
  list-style: none;
`;

export const TeamMember = styled(BackgroundImage)`
  &::before,
  &::after {
    filter: grayscale(50%);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  text-align: center;
`;

export const NextButton = styled.button`
  &:hover {
    background-color: rgba(0, 0, 0, 0.24);
  }
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: backgroundDefault;
  svg {
    width: 60px;
    height: 60px;
    stroke-width: 1px;
  }
  ${transition('background-color', {
    duration: 'complex',
    easing: 'sharp',
  })};
`;
