import styled from '@xstyled/emotion'
import Img from 'gatsby-image'

import { transition } from 'theme/transitions'
import { down } from 'theme/media'

export const StyledFooter = styled.footer`
  background-color: footer;
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5;
  ${down('sm')} {
    padding-left: 0;
    padding-right: 0;
  }
`

export const Hr = styled.hr`
  border-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 4;
  margin-top: 4;
`

export const Copyright = styled.span`
  align-self: center;
  margin-left: 1;
  opacity: 0.5;
  margin-right: auto;
`

export const Logo = styled(Img)`
  width: 160px;
  height: 42px;
  margin: 2;
`

export const Info = styled.div`
  ${down('sm')} {
    flex-direction: column;
  }
  display: flex;
  margin-right: auto;
`

export const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.5;
  margin-left: 4;
  margin-bottom: auto;
  ${down('sm')} {
    width: calc(100% / 2);
  }

  & > span {
    white-space: nowrap;
    svg {
      width: 1.5em;
      position: relative;
      left: -1.5em;
    }
  }
  & > span > div {
    margin-top: 3;
    input,
    input::placeholder {
      color: white;
    }
    span {
      background-color: white;
    }
  }
`

export const SocialIcons = styled.div`
  a {
    &:hover {
      opacity: 1;
    }
    opacity: 0.5;
    color: white;
    width: 1.5em;
    margin-right: 3;
    ${transition('opacity')};
  }
  display: flex;
  margin-left: auto;
  margin-top: 1em;
`
