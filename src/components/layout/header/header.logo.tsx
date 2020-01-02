import styled from '@xstyled/emotion';
import { GatsbyLinkProps, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { FC } from 'react';

import Hidden from 'components/hidden';
import Link from 'elements/link';
import { down, up } from 'theme/media';

const Wrapper = styled(Link)`
  ${up('md')} {
    min-width: 100px;
  }
  ${down('md')} {
    margin-right: auto;
  }
  width: 50px;
  margin-left: 1;
  height: auto;
  padding: 5px;
`;

const Logo: FC<GatsbyLinkProps<any>> = props => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "muskoka-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      icon: file(relativePath: { eq: "muskoka-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Wrapper to="/" {...props}>
      <Hidden down="md">
        <Img
          alt="Muskoka District Rentals"
          imgStyle={{
            objectFit: 'contain',
          }}
          fluid={data.logo.childImageSharp.fluid}
        />
      </Hidden>
      <Hidden up="md">
        <Img
          alt="Muskoka District Rentals"
          imgStyle={{
            objectFit: 'contain',
          }}
          fluid={data.icon.childImageSharp.fluid}
        />
      </Hidden>
    </Wrapper>
  );
};

export default Logo;
