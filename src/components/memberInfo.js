import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import palette from 'theme/palette'
import { rhythm, scale, options as typography } from 'theme/typography'

const Name = styled.div`
  width: 100%;
  margin-bottom: ${rhythm(1)};
  padding-left: ${rhythm(4)};
  h6 {
    ${scale(2 / 3)}
    color: white;
    font-family: ${typography.bodyFontFamily};
    font-weight: 400;
  }
  span {
    ${scale(1 / 8)}
    color: white;
    font-weight: 700;
    text-transform: uppercase;
  }
`
const Info = styled.div`
  width: 50%;
  padding-left: 10%;
  overflow: hidden;
`
const Bio = styled.div`
  background-color: white;
  color: ${palette.text.primary};
  margin-left: ${rhythm(2)};
  max-width: 100%;
  min-height: 80vh;
  padding: ${rhythm(2)};
  z-index: 1001;
`

const MemberInfo = ({ name, bio, title }) => (
  <Info>
    <Name>
      <h6>{name}</h6>
      <span>{title}</span>
    </Name>
    <Bio>{bio}</Bio>
  </Info>
)

MemberInfo.propTypes = {
  bio: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default MemberInfo
