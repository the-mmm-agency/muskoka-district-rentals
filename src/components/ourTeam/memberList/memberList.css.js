import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'

import { transition } from 'theme/transitions'

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
`

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
`
