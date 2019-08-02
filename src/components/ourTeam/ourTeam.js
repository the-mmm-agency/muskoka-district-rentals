import React, { useMemo, useState } from 'react'
import { css } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import { useNumber } from 'react-hanger'
import Img from 'gatsby-image'
import { ChevronRight } from 'styled-icons/evil/ChevronRight'

import {
  Picture,
  NextButton,
  PosedTeamMember,
  TeamMember,
  StyledPoseGroup,
  ImgContainer,
} from './ourTeam.css'
import MemberInfo from './memberInfo'

import Flex from 'components/flex'
import Text from 'components/text'
import Heading from 'components/heading'
import Hidden from 'components/hidden'

const OurTeam = () => {
  const [pose, setPose] = useState('enter')
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
  const selected = useNumber(0, {
    lowerLimit: 0,
    upperLimit: data.team.nodes.length - 1,
    loop: true,
  })
  const handleClick = () => {
    setPose('exit')
    selected.increase()
    setTimeout(() => {
      setPose('enter')
    }, 450)
  }
  const handleMemberClick = index => {
    setPose('exit')
    if (selected.value > index) {
      selected.decrease(selected.value - index)
    } else {
      selected.increase(selected.value + index)
    }
    setTimeout(() => {
      setPose('enter')
    }, 450)
  }
  const members = useMemo(
    () =>
      data.team.nodes
        .slice(selected.value, data.team.nodes.length)
        .concat(data.team.nodes.slice(0, selected.value)),
    [data.team.nodes, selected]
  )
  const team = data.team.nodes
  const current = team[selected.value]
  const colors = ['#1A2021', '#22293A']
  return (
    <>
      <Hidden up="md">
        <Heading
          my={3}
          letterSpacing="caps"
          textAlign="center"
          textTransform="uppercase"
        >
          Our Team
        </Heading>
        <Flex flexDirection="column">
          {team.map(member => (
            <Flex key={member.id} flexDirection="column">
              <Img fluid={member.picture.childImageSharp.fluid} />
              <Flex flexDirection="column" p={3}>
                <Heading as="h5" mb={0}>
                  {member.name}
                </Heading>
                <Text fontSize={6} mb={3} fontWeight="bold">
                  {member.title}
                </Text>
                <p>{member.bio}</p>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Hidden>
      <Hidden down="md">
        <Flex
          as="section"
          position="relative"
          flexDirection="column"
          minHeight="100vh"
          overflow="hidden"
          color="white"
          backgroundColor="white"
          css={css`
            &::before {
              content: '';
              position: absolute;
              height: calc(60vh + 24.3rem);
              min-width: 100%;
              background-color: ${colors[selected.value]};
              z-index: 0;
            }
          `}
        >
          <Heading
            my={6}
            letterSpacing="caps"
            color="white"
            textAlign="center"
            textTransform="uppercase"
            zIndex={1}
          >
            Our Team
          </Heading>
          <Flex
            flexWrap="wrap"
            px={{ xl: 6, lg: 5, md: 4, sm: 3, xs: 2 }}
            justifyContent="flex-end"
          >
            <MemberInfo
              name={current.name}
              bio={current.bio}
              title={current.title}
              pose={pose}
            />
            <Flex flexDirection="column" width={0.5}>
              <ImgContainer pose={pose}>
                <Picture
                  fluid={current.picture.childImageSharp.fluid}
                  objectFit="contain"
                  pose={pose}
                />
              </ImgContainer>
              <Flex width={1} minHeight={0.2}>
                <StyledPoseGroup selectedItemId={current.id} pose={pose}>
                  {members.map((member, index) => (
                    <PosedTeamMember key={member.id} id={member.id}>
                      <TeamMember
                        key={member.id}
                        fluid={member.picture.childImageSharp.fluid}
                        onClick={() => handleMemberClick(index)}
                        tag="li"
                      >
                        <span>{member.name}</span>
                      </TeamMember>
                    </PosedTeamMember>
                  ))}
                </StyledPoseGroup>
                <NextButton bg="backgroundDefault" onClick={handleClick}>
                  <ChevronRight />
                </NextButton>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Hidden>
    </>
  )
}

export default OurTeam
