import styled from '@emotion/styled'
import { height } from '@xstyled/system'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'

const StyledImage = styled(BackgroundImage)`
  * {
    color: white;
  }
  &::before,
  &::after {
    filter: brightness(0.8);
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: fit-content;
  text-align: center;
  ${height}
`;

const PageImage = props => (
  <StyledImage
    height={{ xs: 400, sm: 500, md: 600, lg: 800 }}
    {...props}
    Tag="section"
  />
);

export const query = graphql`
  fragment PageImage on File {
    childImageSharp {
      fluid(maxHeight: 800) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export default PageImage;
