import React, { useMemo, useState } from 'react'
import posed, { PoseGroup } from 'react-pose'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import Img from 'gatsby-image'

import MemberInfo from 'components/memberInfo'
import RightIcon from 'components/rightIcon'
import palette from 'theme/palette'
import { rhythm, scale, options as typography } from 'theme/typography'
import transitions, { easing, duration } from 'theme/transitions'

const Wrapper = styled.section`
  background: linear-gradient(
    180deg,
    ${properties => properties.color} 80vh,
    white 20vh
  );
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  transition: ${(transitions.create('background'),
  {
    duration: duration.enteringScreen,
    easing: easing.easeInOut,
  })};
  h2 {
    color: white;
    padding-top: ${rhythm(4)};
    margin-bottom: ${rhythm(4)};
    text-align: center;
    text-transform: uppercase;
  }
`
const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Picture = styled(Img)`
  min-height: 100%;
  width: 100%;
`

const NextButton = styled.div`
  &:hover {
    background-color: rgba(0, 0, 0, 0.24);
  }
  align-items: center;
  background-color: ${palette.background.dark};
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: ${transitions.create('background-color', {
    duration: duration.complex,
    easing: easing.sharp,
  })};
  width: 25%;
`

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const Team = styled.div`
  display: flex;
  min-height: 20%;
  width: 100%;
`

const StyledPose = styled(PoseGroup)`
  display: flex;
  list-style: none;
  margin: 0;
  width: 75%;
`

const PosedTeamMember = posed.li({
  enter: { opacity: 1, x: 0 },
  exit: {
    x: ({ selectedItemId, id }) => (id === selectedItemId ? 100 : -100),
  },
})

const TeamMemberWrapper = styled(PosedTeamMember)`
  width: calc(100% / 3);
`

const TeamMember = styled(BackgroundImage)`
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
  text-align: center;
  transition: ${transitions.create('opacity', {
    duration: duration.complex,
    easing: easing.sharp,
  })};
  opacity: 1;
  span {
    font-weight: 600;
    margin: auto;
    text-transform: uppercase;
  }
  height: 100%;
  width: 100%;
`

const OurTeam = () => {
  const [selected, setSelected] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const colors = ['#323e50', '#23547e', '#232b38', '#183b58']
  const data = useStaticQuery(graphql`
    query {
      team: allTeamJson {
        nodes {
          id
          name
          title
          bio
          picture {
            childImageSharp {
              fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const handleClick = () => {
    setTransitioning(true)

    setTimeout(() => {
      if (selected === data.team.nodes.length - 1) {
        setSelected(0)
      } else {
        setSelected(selected + 1)
      }
      setTransitioning(false)
    }, 500)
  }
  const color = useMemo(() => colors[selected], [colors, selected])
  const members = useMemo(
    () =>
      data.team.nodes
        .slice(selected + 1, 3)
        .concat(data.team.nodes.slice(0, selected)),
    [data.team.nodes, selected]
  )
  const team = data.team.nodes
  return (
    <Wrapper color={color}>
      <h2>Our Team</h2>
      <InfoWrapper>
        <MemberInfo
          key={team[selected].id}
          name={team[selected].name}
          bio={team[selected].bio}
          title={team[selected].title}
          selected={!transitioning}
        />
        <TeamWrapper>
          <Picture
            fluid={team[selected].picture.childImageSharp.fluid}
            objectFit="contain"
          />
          <Team>
            <StyledPose selectedItemId={team[selected].id}>
              {members.map((member, index) => (
                <TeamMemberWrapper key={member.id} id={member.id}>
                  <TeamMember
                    key={member.id}
                    fluid={member.picture.childImageSharp.fluid}
                    backgroundColor={colors[index]}
                    tag="li"
                  >
                    <span>{member.name}</span>
                  </TeamMember>
                </TeamMemberWrapper>
              ))}
            </StyledPose>
            <NextButton onClick={handleClick}>
              <RightIcon />
            </NextButton>
          </Team>
        </TeamWrapper>
      </InfoWrapper>
    </Wrapper>
  )
}

export default OurTeam
