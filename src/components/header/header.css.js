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

export const Nav = styled.nav`
  flex: 1 0;
  display: flex;
  flex-wrap: wrap;
  & > span,
  hr {
    margin: 0 4;
  }
  & > span {
    font-size: 0.7rem;
    color: textLight;
    a {
      margin-right: 4;
      color: textLight;
    }
  }
`

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
