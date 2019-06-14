import React, { useMemo, useState } from 'react'
import posed, { PoseGroup } from 'react-pose'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { useNumber } from 'react-hanger'

import transitions, { duration, easing } from 'theme/transitions'
import MemberInfo from 'components/memberInfo'
import RightIcon from 'components/rightIcon'

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  color: white;
  background: linear-gradient(180deg, ${props => props.color} 80vh, white 20vh);
`
const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Picture = styled(Img)`
  width: 100%;
  height: 60vh;
`

const NextButton = styled.div`
  &:hover {
    background-color: rgba(0, 0, 0, 0.24);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  cursor: pointer;
  transition: ${transitions.create('background-color', {
    duration: duration.complex,
    easing: easing.sharp,
  })};
`

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const Team = styled.div`
  display: flex;
  width: 100%;
  min-height: 20%;
`

const StyledPose = styled(PoseGroup)`
  display: flex;
  width: 75%;
  margin: 0;
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
  background-color: ${props => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  opacity: 1;
  transition: ${transitions.create('opacity', {
    duration: duration.complex,
    easing: easing.sharp,
  })};
  span {
    margin: auto;
    font-weight: 600;
    text-transform: uppercase;
  }
`

const OurTeam = () => {
  const [transitioning, setTransitioning] = useState(false)
  const selected = useNumber(0, { lowerLimit: 0, upperLimit: 2, loop: true })
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
      selected.increase()
      setTransitioning(false)
    }, 500)
  }
  const color = useMemo(() => colors[selected.value], [colors, selected])
  const members = useMemo(
    () =>
      data.team.nodes
        .slice(selected.value + 1, 3)
        .concat(data.team.nodes.slice(0, selected.value)),
    [data.team.nodes, selected]
  )
  const team = data.team.nodes
  return (
    <Wrapper color={color}>
      <h2
        mb={4}
        pt={4}
        color="white"
        textAlign="center"
        css={{ textTransform: 'uppercase' }}
      >
        Our Team
      </h2>
      <InfoWrapper>
        <MemberInfo
          key={team[selected.value].id}
          name={team[selected.value].name}
          bio={team[selected.value].bio}
          title={team[selected.value].title}
          selected={!transitioning}
        />
        <TeamWrapper>
          <Picture
            fluid={team[selected.value].picture.childImageSharp.fluid}
            objectFit="contain"
          />
          <Team>
            <StyledPose selectedItemId={team[selected.value].id}>
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
            <NextButton bg="background.dark" onClick={handleClick}>
              <RightIcon />
            </NextButton>
          </Team>
        </TeamWrapper>
      </InfoWrapper>
    </Wrapper>
  )
}

export default OurTeam
