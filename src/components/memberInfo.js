import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { rhythm, options as typography, scale } from 'theme/typography'
import SplitText from 'react-pose-text'

import palette from 'theme/palette'

const Name = styled.div`
  padding-left: ${rhythm(4)};
  margin-bottom: ${rhythm(1)};
  width: 100%;
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
  padding-left: 10%;
  overflow: hidden;
  width: 50%;
`
const Bio = styled.div`
  ${scale(1 / 4)};
  background-color: white;
  color: ${palette.text.primary};
  margin-left: ${rhythm(2)};
  max-width: 100%;
  min-height: 80vh;
  padding: ${rhythm(2)};
  z-index: 1001;
`

const charPoses = {
  exit: { opacity: 0 },
  enter: { opacity: 1 },
}

const MemberInfo = ({ name, bio, title, selected }) => (
  <Info>
    <Name>
      <h6>
        <SplitText charPoses={charPoses} pose={selected ? 'enter' : 'exit'}>
          {name}
        </SplitText>
      </h6>
      <span>
        <SplitText charPoses={charPoses} pose={selected ? 'enter' : 'exit'}>
          {title}
        </SplitText>
      </span>
    </Name>
    <Bio>
      <SplitText charPoses={charPoses} pose={selected ? 'enter' : 'exit'}>
        {bio}
      </SplitText>
    </Bio>
  </Info>
)

MemberInfo.propTypes = {
  bio: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
}

export default MemberInfo
