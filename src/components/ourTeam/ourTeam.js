import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import Hidden from 'components/hidden'
import Mobile from './ourTeam.mobile'
import Desktop from './ourTeam.desktop'


const OurTeam = () => {
  const {
    allTeamJson: { nodes: team },
  } = useStaticQuery(graphql`
    query {
      allTeamJson {
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
  return (
    <>
      <Hidden up="md">
        <Mobile team={team} />
      </Hidden>
      <Hidden down="md">
        <Desktop team={team} />
      </Hidden>
    </>
  )
}

export const teamPropTypes = {
  team: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.object.isRequired,
  }).isRequired,
}

export default OurTeam
