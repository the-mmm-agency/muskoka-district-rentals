import posed from 'react-pose'
import styled from '@xstyled/emotion'

export const Container = posed.header({
  enter: {
    y: 0,
    transition: {
      ease: [0.4, 0, 0.6, 1],
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: [0.4, 0, 0.2, 1],
    },
  },
})

export const StyledHeader = styled(Container)`
  box-shadow: 1;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: header;
  display: flex;
  align-items: center;
  padding: 2;
  text-align: center;
  background-color: backgroundLight;
`
