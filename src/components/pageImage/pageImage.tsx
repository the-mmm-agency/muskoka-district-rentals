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
    filter: brightness(0.3);
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
    height={{ xs: 200, sm: 300, md: 400, lg: 500 }}
    {...props}
    Tag="section"
    fadeIn
  />
);

export const query = graphql`
  fragment PageImage on File {
    childImageSharp {
      fluid(maxWidth: 4096) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export default PageImage;
