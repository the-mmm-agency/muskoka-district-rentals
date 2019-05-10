import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import styled from 'styled-components'

import RightIcon from 'components/rightIcon'
import { rhythm, options as typography } from 'theme/typography'
import transitions from 'theme/transitions'

const Wrapper = styled.section`
  &::before {
    background-color: ${props => props.color};
    height: 80%;
  }
  transition: ${(transitions.create('background-color'),
  {
    duration: transitions.duration.enteringScreen,
    easing: transitions.easing.easeInOut,
  })};
  h2 {
    padding-top: ${rhythm(4)};
    text-align: center;
    text-transform: uppercase;
  }
`

const Name = styled.div`
  padding-left: ${rhythm(2)};
  width: 100%;
  h6 {
    font-family: ${typography.bodyFontFamily};
    font-weight: 400;
  }
  span {
    font-weight: 500;
    text-transform: uppercase;
  }
`
const Info = styled.div`
  padding-left: 30%;
`
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Bio = styled.div`
  background-color: #fff;
  width: 20vh;
`

const NextButton = styled.div`
  &:hover {
    background-color: rgba(0, 0, 0, 0.24);
  }
  cursor: pointer;
  background-color: transparent;
  width: 25%;
`
const Picture = styled(Img)`
  object-fit: contain;
  height: 100%;
  width: 100%;
`

const Team = styled.div`
  display: flex;
  flex-basis: 25%;
  flex-direction: column;
  margin-top: auto;
  height: 20%;
`

const TeamMember = styled(BackgroundImage)`
  span {
    &:hover {
      opacity: 100;
    }
    opacity: 80;
    font-weight: 500;
    padding: 10% 40%;
    transform: ${transitions.create('opacity', {
      duration: transitions.duration.complex,
      easing: transitions.easing.sharp,
    })};
    text-align: center;
    text-transform: uppercase;
    width: 25%;
  }
`

const OurTeam = () => {
  const [selected, setSelected] = useState(0)
  const { nodes: team } = useStaticQuery(graphql`
    query {
      team: allTeamJson {
        nodes {
          id
          name
          title
          bio
          picture {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const handleClick = () => {
    if (selected === team.length) {
      setSelected(0)
    } else {
      setSelected(selected + 1)
    }
  }
  return (
    <Wrapper>
      <h2>Our Team</h2>
      <InfoWrapper>
        <Info>
          <Name>
            <h6>{team[selected].name}</h6>
            <span>{team[selected].title}</span>
          </Name>
          <Bio>{team[selected].bio}</Bio>
        </Info>
        <Picture fluid={team[selected].picture.childImageSharp.fluid} />
      </InfoWrapper>
      <Team>
        {team.slice(selected + 1, selected + 4).map(member => (
          <TeamMember
            key={member.id}
            fluid={member.picture.childImageSharp.fluid}
          >
            <span>{member.name}</span>
          </TeamMember>
        ))}
        <NextButton onClick={handleClick}>
          <RightIcon />
        </NextButton>
      </Team>
    </Wrapper>
  )
}
