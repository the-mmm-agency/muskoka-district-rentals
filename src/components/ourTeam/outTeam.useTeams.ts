import { graphql, useStaticQuery } from 'gatsby'

import { Member } from './ourTeam.types'

interface Result {
  allTeamJson: {
    nodes: Member[];
  };
}

const query = graphql`
  query Team {
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
`;

export const useTeam = (): Member[] => {
  const result: Result = useStaticQuery(query);
  return result.allTeamJson.nodes;
};
