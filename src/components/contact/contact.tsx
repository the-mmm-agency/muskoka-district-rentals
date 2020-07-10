import styled from '@xstyled/emotion'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'

import { up } from 'theme/media'

const Image = styled(BackgroundImage)`
  * {
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
  }
  h2,
  h3,
  h4,
  span,
  span > strong {
    color: white;
  }
  span:last-of-type {
    margin-top: 4;
  }
  &::before,
  &::after {
    filter: brightness(0.8);
  }
  h2 {
    margin-bottom: 5;
  }
  h4 {
    margin-top: 3;
    margin-bottom: 1;
  }
  a {
    color: white;
    transition: color ease cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      color: secondary;
    }
  }
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 5 0;
  ${up('sm')} {
    padding: 6 0;
  }
`;

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactImage {
      file(relativePath: { eq: "contact-us.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Image fluid={data.file.childImageSharp.fluid}>
      <h2>Get In Touch With Us</h2>
      <h4>Canada</h4>
      <span>Port Carling: 113 Medora St Port Carling ON P0B 1J0</span>
      <span>Foot’s Bay: 1007 McDonald Rd MacTier ON P0C 1H0</span>
      <span>Simcoe County: 14-67 Fittons Rd E Orillia ON L3V 2J2</span>
      <span>Toronto: 1520-111 St Clair Ave W Toronto ON M4V 1N5 USA 812</span>
      <h4>USA</h4>
      <span>812 Briny Ave Suite 7B Pompano Beach FL 33062</span>
      <span>
        <strong>Email:</strong>{' '}
        <a href="mailto:hello@muskokadistrictrentals.com">
          hello@muskokadistrictrentals.com
        </a>
      </span>
    </Image>
  );
};

export default Contact;
