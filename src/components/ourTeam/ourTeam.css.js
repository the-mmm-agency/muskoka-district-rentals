import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import posed, { PoseGroup } from 'react-pose'

import { transition } from 'theme/transitions'

export const StyledPoseGroup = styled(PoseGroup)`
  display: flex;
  flex: 0 0 calc(100% / 3);
  width: 75%;
  margin: 0;
`

export const PosedTeamMember = posed.li({
  enter: {
    x: 0,
    delay: 50,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 0,
    },
  },
  exit: {
    x: ({ selectedItemId, id }) => (id === selectedItemId ? 100 : -100),
    transition: {
      type: 'spring',
      stiffness: 700,
      damping: 0,
    },
  },
})

export const TeamMember = styled(BackgroundImage)`
  &::before,
  &::after {
    filter: grayscale(50%);
  }
  &:hover {
    opacity: 1;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  opacity: 0.5;
  ${transition('opacity', { duration: 'complex', easing: 'sharp' })}
  span {
    font-weight: bold;
    margin-top: 50%;
    text-transform: uppercase;
  }
`

export const NextButton = styled.button`
  &:hover {
    background-color: rgba(0, 0, 0, 0.24);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  cursor: pointer;
  svg {
    height: 60px;
    width: 60px;
    stroke-width: 1px;
  }
  ${transition('background-color', {
    duration: 'complex',
    easing: 'sharp',
  })};
`

const PosedImgContainer = posed.div({
  enter: {
    delay: 400,
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
})

export const ImgContainer = styled(PosedImgContainer)`
  display: flex;
`

export const Picture = styled(Img)`
  width: 100%;
  height: 60vh;
`
