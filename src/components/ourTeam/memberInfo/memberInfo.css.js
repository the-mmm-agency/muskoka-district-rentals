import styled from '@xstyled/emotion'
import posed from 'react-pose'

const transitionValues = {
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const PosedWrapper = posed.div({
  enter: {
    ...transitionValues.enter,
    delayChildren: 500,
    staggerChildren: 350,
  },
  exit: {
    ...transitionValues.exit,
    delay: 500,
  },
})

const PosedBio = posed.div(transitionValues)
const PosedInfo = posed.div(transitionValues)

export const Bio = styled(PosedBio)`
  background-color: white;
  color: textPrimary;
  margin-left: 2;
  max-width: 100%;
  min-height: 80vh;
  padding: 4;
  z-index: 1001;
`

export const Info = styled(PosedInfo)`
  margin-bottom: 1;
  padding-left: 4;
  width: 25rem;
`

export const Name = styled.h4`
  color: white;
  font-family: sans;
  font-weight: normal;
  white-space: nowrap;
`

export const Title = styled.span`
  color: white;
  font-weight: bold;
  font-size: 6;
  text-transform: uppercase;
`

export const Wrapper = styled(PosedWrapper)`
  width: 40%;
  padding-left: 3;
  overflow: hidden;
  z-index: 1;
`
